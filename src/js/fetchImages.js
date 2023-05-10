// import axios from 'axios';
// import { createImage } from './createImage';

// export let perPage = 40;
// export let page = 1;

// export async function fetchImages(searchValue, page) {
//   const BASE_URL = 'https://pixabay.com/api/';

//   const options = {
//     params: {
//       key: '36178128-0622d55030d412849bd46106d',
//       q: searchValue,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: page,
//       per_page: 40,
//     },
//   };

//   try {
//     const response = await axios.get(BASE_URL, options);

//     // notification(response.data.hits.length, response.data.total);

//     createImage(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
