import axios from 'axios';
export async function fetchImages(searchValue, currentPage = 1) {
  const BASE_URL = 'https://pixabay.com/api/';

  const options = {
    params: {
      key: '36178128-0622d55030d412849bd46106d',
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: currentPage,
      per_page: 40,
    },
  };

  return await axios.get(BASE_URL, options);
}
