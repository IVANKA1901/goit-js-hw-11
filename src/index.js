import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './fetchImages';
import { createImage } from './createImages';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('.search-input'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadBtn);
refs.loadMoreBtn.style.display = 'none';

let page = 1;
let searchValue = '';

async function onFormSubmit(evt) {
  evt.preventDefault();

  page = 1;
  refs.gallery.innerHTML = '';
  searchValue = refs.input.value.trim();

  if (searchValue) {
    try {
      const response = await fetchImages(searchValue);
      const markup = createImage(response.data);
      refs.gallery.insertAdjacentHTML('beforeend', markup);
      notification(response.data.hits.length, response.data.total);
    } catch (error) {
      console.log(error);
    }
  } else {
    refs.loadMoreBtn.style.display = 'none';

    Notiflix.Notify.failure(
      '❌Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

async function onLoadBtn() {
  page += 1;
  try {
    const response = await fetchImages(searchValue, page);
    const markup = createImage(response.data);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    notification(response.data.hits.length, response.data.total);
    simpleLightBox.refresh();
  } catch (error) {
    console.log(error);
  }
}

const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function notification(length, totalHits) {
  if (length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );

    refs.loadMoreBtn.style.display = 'none';
    return;
  }

  if (page === 1) {
    refs.loadMoreBtn.style.display = 'flex';

    Notiflix.Notify.success(`✨Yeeeey! We found ${totalHits} images.`);
  }

  if (length < 40) {
    refs.loadMoreBtn.style.display = 'none';

    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
