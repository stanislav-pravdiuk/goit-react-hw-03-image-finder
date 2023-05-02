import css from './image-gallery.module.css';

function ImageGalleryItem({ pix: { webformatURL, tags }, onClick }) {
    return (
        <li
            className={css.imageGallery__item}>
            <button type="button" onClick={()=>onClick}></button> 
            <img
                className={css.imageGalleryItem__image}
                src={webformatURL}
                    alt={tags} />
        </li>
    )
};

export default ImageGalleryItem;