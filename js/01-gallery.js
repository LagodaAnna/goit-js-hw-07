import { galleryItems } from './gallery-items.js';
// Change code below this line

let instance;
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', onImageClick);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function getLargeImageURL(evt) {
  return evt.target.dataset.source;
}

function handlerModalWindow(imageURL) {
  instance = basicLightbox.create(
    `
    <img src='${imageURL}' width="800" height="600">`,
    {
      onShow: instance => addListener(),
      onClose: instance => removeListener(),
    },
  );

  instance.show();
}

function onImageClick(evt) {
  const isImage = evt.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }
  evt.preventDefault();
  const imageSRC = getLargeImageURL(evt);
  handlerModalWindow(imageSRC);
}

function onEscPress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}

function addListener() {
  window.addEventListener('keydown', onEscPress);
}

function removeListener() {
  window.removeEventListener('keydown', onEscPress);
}
