import { BASE_URL, API_KEY } from "./api";

function fetchPix(searchQuery) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(new Error('WTF?!'))
                })
}

export default { fetchPix };