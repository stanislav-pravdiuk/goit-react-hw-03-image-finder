import { BASE_URL, API_KEY } from "./api";

const fetchPix = async (searchQuery, page) => {
    await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error('WTF?!'));
        });
};

export { fetchPix };