import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images.length !== this.props.images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <ul className={styles.ImageGallery} onClick={this.props.onClick}>
        {this.props.images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            URL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
