import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, tags, largeImageURL }) => (
  <li className={styles.GalleryItem}>
    <img
      src={url}
      alt={tags}
      className={styles.GalleryItemImage}
      data-source={largeImageURL}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
