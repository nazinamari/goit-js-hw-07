import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

function createGalleryMarkup(items) {
    return items.map((item) => `
        <li class="">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>
    `).join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

const options = {
captionsData: "alt",
captionPosition: "bottom",
captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery a", options);