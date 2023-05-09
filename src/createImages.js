export function createImage(images) {
  return images.hits
    .map(
      image =>
        `<a class="photo-link" href="${image.largeImageURL}">
    <div class="photo-card">
            <div class="photo">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
                    </div>
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            ${image.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            ${image.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            ${image.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            ${image.downloads}
                        </p>
                    </div>
            </div>
        </a>`
    )
    .join('');
}
