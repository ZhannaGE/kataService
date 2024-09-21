export const setupMenuToggle = () => {
  const menuButton = document.querySelector('.header__menu-button');
  const closeButton = document.querySelector('.menu__close-button');
  const menu = document.querySelector('.menu');
  const menuModal = document.querySelector('.menu__modal'); // Само модальное окно

  // Открытие меню по нажатию кнопки
  menuButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Останавливаем всплытие события клика
    menu.classList.toggle('menu--open');
  });

  // Закрытие меню по нажатию кнопки закрытия
  closeButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Останавливаем всплытие события клика
    menu.classList.remove('menu--open');
  });

  // Закрытие меню по клику на область вокруг модального окна
  document.addEventListener('click', (e) => {
    // Проверяем, что клик произошел за пределами модального контента
    if (!menuModal.contains(e.target) && menu.classList.contains('menu--open')) {
      menu.classList.remove('menu--open');
    }
  });

  // Останавливаем всплытие события клика внутри модального окна
  menuModal.addEventListener('click', function(e) {
    e.stopPropagation(); // Останавливаем всплытие события клика
  });
};

