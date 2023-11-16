import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const createGalleryCardsMarkup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" 
       src="${preview}"
       alt="${description}" />
    </a>
 </li>`
    );
    galleryContainer.insertAdjacentHTML('beforeend', createGalleryCardsMarkup.join(''));

      new SimpleLightbox('.gallery a', {  
      captionSelector: 'img',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
      scrollZoom: false,});
     
   