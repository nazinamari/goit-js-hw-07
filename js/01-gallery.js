import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items.map((item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `).join("");
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener('click', onClickHandler);

function onClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const source = evt.target.dataset.source;
  const modal = createModal(source);
  modal.show();

  galleryContainer.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(evt) {
    if (evt.code === "Escape") {
      modal.close();
      galleryContainer.removeEventListener('keydown', handleKeyDown);
    }
  }
}

function createModal(source) {
  const modal = basicLightbox.create(`
    <div class="modal">
      <img src="${source}" width="100%" height="100%"/>
    </div>
  `);
  return modal;
}

// import { galleryItems } from './gallery-items.js';

// const galleryContainer = document.querySelector(".gallery");

// function createGalleryMarkup(items) {
//   return items
//   .map(
//     (item) => 
//     `<li class="gallery__item">
//       <a class="gallery__link" href="large-image.jpg">
//         <img
//           class="gallery__image"
//           src=${item.preview}
//           data-source=${item.original}
//           alt=${item.description}
//         />
//       </a>
//     </li>
//     `
//   ).join("");
// }

// const addGalleryMarkup = createGalleryMarkup(galleryItems);

// galleryContainer.innerHTML = addGalleryMarkup;
// galleryContainer.addEventListener('click', onClickHandler);

// function onClickHandler (evt) {
//   evt.preventDefault();
//   if(evt.target.nodeName !== "IMG" ){
//     return;
//   }

//   const instance = basicLightbox.create(`
//   <div class="modal">
//     <img src="${evt.target.dataset.source}" width="100%" heigh="100%"/>
//   </div>
// `)
// instance.show();

// galleryContainer.addEventListener('keydown', evt => {
//   if (evt.code === "Escape") {
//     instance.close();
//   }
// });
// };

