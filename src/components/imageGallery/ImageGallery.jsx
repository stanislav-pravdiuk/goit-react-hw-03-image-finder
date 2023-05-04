import React, { Component } from "react";
import css from './image-gallery.module.css';
import ImageGalleryItem from "./imageGalleryItem";
import Loader from "../loader/Loader";
import pixAPI from '../../services/pixApi';
import Button from '../button/Button';
import Modal from '../modal/Modal';

class ImageGallery extends Component {
    state = {
        response: '',
        error: null,
        status: null,
        showModal: false,
        modalImg: '',
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
        this.setState(state => ({
            showModal: !state.showModal,
        })); 
    };

    getModalImg = (modalImg) => {
        this.setState(({
            modalImg
        }))
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
            return <div>
                        <ul className={css.imageGallery}>
                            {response.hits.map(pix =>
                                <ImageGalleryItem
                                    onGetModalImg={this.getModalImg}
                                    toggleModal={this.toggleModal}
                                    key={pix.id}
                                    pix={pix}
                                />
                                )}
                        </ul>
                        <Button onClick={this.toggleModal}>More</Button>
                        {this.state.showModal &&
                            <Modal onClose={this.toggleModal}>
                                <img src={this.state.modalImg} alt="" />
                            </Modal>}
                    </div>
                
        
        };
};

export default ImageGallery;