import css from './image-gallery.module.css';

function ImageGalleryItem({ pix: { webformatURL, tags }, toggleModal }) {
    return (
        <li
            className={css.imageGallery__item}>
            <img
                onClick={toggleModal}
                className={css.imageGalleryItem__image}
                src={webformatURL}
                alt={tags}
            />
        </li>
    )
};

export default ImageGalleryItem;