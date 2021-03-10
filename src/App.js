import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Spinner from './Components/Loader/Loader';
import imagesApi from './services/imagesApi';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    showModal: false,
    activeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
    };

    this.setState({ isLoading: true });

    imagesApi(options)
      .then(data => {
        if (data.hits.length === 0) {
          return toast.warn(`Enter another search query`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  onChangeSearchText = searchText => {
    this.setState({
      searchQuery: searchText,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  onGalleryClick = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({ activeImage: e.target });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { images, isLoading, error, showModal, activeImage } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeSearchText} />
        {isLoading && <Spinner />}
        <ImageGallery images={images} onClick={this.onGalleryClick} />
        {images.length > 0 && (
          <Button text="Load more" onClick={this.fetchImages} />
        )}
        {error && <h2> Whoops, something went wrong: {error.message} </h2>}
        {showModal && (
          <Modal activeImage={activeImage} onClose={this.toggleModal}>
            <img src={activeImage.dataset.source} alt={activeImage.alt} />
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
