import React, { Component } from "react";
import css from './image-gallery.module.css';
import { BASE_URL, API_KEY } from "./api";
import ImageGalleryItem from "./imageGalleryItem";

class ImageGallery extends Component {
    state = {
        response: '',
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;

        if (prevSearchQuery !== nextSearchQuery) {

            this.setState({ loading: true})
            fetch(`${BASE_URL}?key=${API_KEY}&q=${nextSearchQuery}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(response => this.setState({ response }))
                .finally(() => this.setState({ loading: false }));
        }
    }
    render() {
        const { response, loading } = this.state;

        return (
            <ul className={css.imageGallery}>
                {loading && <div>Загрузка...</div>}
                {response && <ul>{response.hits.map(pix =>
                    <ImageGalleryItem pix={pix} />
                    )}</ul>}
            </ul>
        )
    }
};

export default ImageGallery;