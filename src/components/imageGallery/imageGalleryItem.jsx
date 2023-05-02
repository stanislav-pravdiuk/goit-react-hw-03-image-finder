import css from './image-gallery.module.css';

function ImageGalleryItem({ pix }) {
    return (
        <li
            key={pix.id}
            className={css.imageGallery__item}>
            <img
                className={css.imageGalleryItem__image}
                src={pix.webformatURL}
                alt={pix.tags} />
        </li>
    )
};

export default ImageGalleryItem;