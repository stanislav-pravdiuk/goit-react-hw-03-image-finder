import React, { Component } from "react";
import css from './image-gallery.module.css';
import { BASE_URL, API_KEY } from "./api";
import ImageGalleryItem from "./imageGalleryItem";
import Loader from "../loader/Loader";


class ImageGallery extends Component {
    state = {
        response: '',
        error: null,
        status: null,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;

        if (prevSearchQuery !== nextSearchQuery) {

            this.setState({ status: 'pending' })
            fetch(`${BASE_URL}?key=${API_KEY}&q=${nextSearchQuery}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(new Error('WTF?!'))
                })
                .then(response => this.setState({ response, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }
    render() {
        const { response, error, status } = this.state;

        if (status === 'pending') {
            return <Loader/>
        };

        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        };

        if (status === 'resolved')
            return  <ul className={css.imageGallery}>
                        {response.hits.map(pix =>
                        <ImageGalleryItem pix={pix} />
                        )}
                    </ul>
        };
};

export default ImageGallery;