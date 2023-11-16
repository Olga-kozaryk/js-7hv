import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
//console.log(galleryContainer);

// створення розмітки
const createGalleryCardsMarkup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </li>`
    );
    galleryContainer.insertAdjacentHTML('beforeend', createGalleryCardsMarkup.join(''));

    //відсліковування події і запуск модального вікна
    galleryContainer.addEventListener('click', onClickMarkup);
    function onClickMarkup(evt) {
        evt.preventDefault();
      if (!evt.target.classList.contains('gallery__image')) {
        return ;
      }
      const imgModal = evt.target.dataset.source;
      const instance = basicLightbox.create(
        `<img src="${imgModal}"  width="800" height="600">`,
        {
            onShow: () => {
            document.addEventListener("keydown", onClickEsc ); // додавання слухача подій
          },
            onClose: () => {
            document.removeEventListener("keydown", onClickEsc ); // знімання слухача подій
          },
        }
       );

      instance.show();

     function onClickEsc (evt) {
     if (evt.code === "Escape") {
      instance.close();
     }
  
        }
    };
    
    
   
    


