import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function creatGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
      <img 
        class="gallery__image" 
          src=${preview} 
          alt=${description}
        </a>`}).join('');
}
const galleryItem = creatGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItem);

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
};

console.log(galleryItems);
