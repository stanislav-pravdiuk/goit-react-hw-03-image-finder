import css from './image-gallery.module.css';
import React, {Component} from 'react';

class ImageGalleryItem extends Component {

    onClick = () => {
        this.props.onGetModalImg(this.props.pix.largeImageURL);
        this.props.toggleModal();
    };

    render() { 
        return (
        <li
            className={css.imageGallery__item}>
            <img
                onClick={this.onClick}    
                className={css.imageGalleryItem__image}
                src={this.props.pix.webformatURL}
                alt={this.props.pix.tags}
            />
        </li>
    )
    }
};

export default ImageGalleryItem;