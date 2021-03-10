import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';

const key = '19803942-bce50698df017688d362fe506';

const fetchImagesWithQuery = ({ searchQuery, currentPage, pageSize = 12 }) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data);
};

export default fetchImagesWithQuery;
