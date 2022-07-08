import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. 
// Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

const galleryContainer = document.querySelector('.gallery');

galleryItems.forEach((galleryItem) => {
    galleryContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
    <img
        class="gallery__image"
        src=${galleryItem.preview}
        data-source=${galleryItem.original}
        alt=${galleryItem.description}
        />
    </a>
    </div>`
    );
});

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const example = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  example.show();
  window.addEventListener("keydown", onModalOpen);

  function onModalOpen(el) {
    console.log(el);
    if (el.code !== "Escape") {
      return;
    }

    example.close();
    window.removeEventListener("keydown", onModalOpen);
  }
});

 console.log(galleryItems);


