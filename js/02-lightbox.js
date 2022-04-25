import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
