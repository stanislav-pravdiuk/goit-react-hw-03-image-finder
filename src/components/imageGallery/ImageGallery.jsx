import React, { Component } from "react";
import css from './image-gallery.module.css';
import ImageGalleryItem from "./imageGalleryItem";
import Loader from "../loader/Loader";
import pixAPI from '../../services/pixApi'

class ImageGallery extends Component {
    state = {
        response: '',
        error: null,
        status: null,
        showModal: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;
        
        if (prevSearchQuery !== nextSearchQuery) {
            
            this.setState({ status: 'pending' });
            pixAPI
                .fetchPix(nextSearchQuery)
                .then(response => this.setState({ response, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
            
        } 
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
    };

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
                            <ImageGalleryItem
                                onClick={this.toggleModal}
                                key={pix.id}
                                pix={pix} />
                        )}
                    </ul>
        };
};

export default ImageGallery;