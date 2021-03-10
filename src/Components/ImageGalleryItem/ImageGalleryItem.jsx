import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ URL, tags, id, largeImageURL }) => (
  <li className={styles.GalleryItem}>
    <img
      id={id}
      src={URL}
      alt={tags}
      className={styles.GalleryItemImage}
      data-source={largeImageURL}
    />
  </li>
);

export default ImageGalleryItem;
