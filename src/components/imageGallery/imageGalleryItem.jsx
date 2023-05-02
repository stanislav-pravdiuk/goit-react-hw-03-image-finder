import css from './image-gallery.module.css';

function ImageGalleryItem({ pix: { id, webformatURL, tags } }) {
    return (
        <li
            key={id}
            className={css.imageGallery__item}>
            <img
                className={css.imageGalleryItem__image}
                src={webformatURL}
                alt={tags} />
        </li>
    )
};

export default ImageGalleryItem;