import '../scss/style.scss';

import {brandBtn} from './brandBtn';
import {techBtn} from './techBtn'
import {openModal} from './openModal';
import { initSwiper } from './swiper';
import { setupButton } from './toggleButton';
import { setupTabsAndReadMore } from './setupTabsAndReadMore';
import { setupMenuToggle } from './setupMenuToggle';
import { setupMenuLinks } from './setupMenuLinks';

document.addEventListener('DOMContentLoaded', () => {
  brandBtn();
  techBtn();
  openModal();
  initSwiper();
  setupMenuLinks();
  setupButton();
  setupTabsAndReadMore();
  setupMenuToggle();
});
