
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


export function initSwiper() {
  const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
