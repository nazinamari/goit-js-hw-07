import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const createGalleryMarkup = (items) => {
  return items.map(
    item => 
    `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src=${item.preview}
          data-source=${item.original}
          alt=${item.description}
        />
      </a>
    </li>
    `
  ).join("")
}

galleryContainer.addEventListener('click', onClickHandler);
window.addEventListener('keydown', onModelOpen)

function onClickHandler (evt) {
  evt.preventDefault();
  if(evt.target.nodeName !== "IMG" ){
    return;
  }
};

// const instance = basicLightbox.create(`
//   <div class="modal">
//     <img src="${evt.target.dataset.source}" width="100vw" heigh="100vh"/>
//   </div>
// `)
// instance.show();

function onModelOpen (evt) {
  if (evt.code !== "Escape" ) {
    return;
  }
  console.log(evt.code);

  instance.close();
  window.removeEventListener("keydown", onModelOpen);
}



