export const setupMenuToggle = () => {
  const menuButton = document.querySelector('.header__menu-button');
  const closeButton = document.querySelector('.menu__close-button');
  const menu = document.querySelector('.menu');
  const menuModal = document.querySelector('.menu__modal'); // Само модальное окно

  // Функция для блокировки и разблокировки скролла
  const toggleScroll = (shouldBlock) => {
    if (shouldBlock) {
      document.body.classList.add('no-scroll'); // Блокируем скролл
    } else {
      document.body.classList.remove('no-scroll'); // Разблокируем скролл
    }
  };

  // Открытие меню по нажатию кнопки
  menuButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Останавливаем всплытие события клика
    menu.classList.toggle('menu--open');
    toggleScroll(menu.classList.contains('menu--open')); // Блокируем или разблокируем скролл
  });

  // Закрытие меню по нажатию кнопки закрытия
  closeButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Останавливаем всплытие события клика
    menu.classList.remove('menu--open');
    toggleScroll(false); // Разблокируем скролл
  });

  // Закрытие меню по клику на область вокруг модального окна
  document.addEventListener('click', (e) => {
    // Проверяем, что клик произошел за пределами модального контента
    if (!menuModal.contains(e.target) && menu.classList.contains('menu--open')) {
      menu.classList.remove('menu--open');
      toggleScroll(false); // Разблокируем скролл
    }
  });

  // Останавливаем всплытие события клика внутри модального окна
  menuModal.addEventListener('click', function(e) {
    e.stopPropagation(); // Останавливаем всплытие события клика
  });
};


