import { BASE_URL, API_KEY } from "./api";

export default function fetchPix(searchQuery, page) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(new Error('WTF?!'))
                })
}

// export default { fetchPix };