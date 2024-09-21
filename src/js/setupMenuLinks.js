export const setupMenuLinks = () => {
  const elements = document.querySelectorAll('.menu__link');

  // Функция для очистки активных классов
  const clearActiveClasses = () => {
    elements.forEach(element => {
      element.classList.remove('active');
    });
  };

  // Добавление обработчиков событий на каждый элемент меню
  elements.forEach(element => {
    element.addEventListener('click', function() {
      clearActiveClasses(); // Очистка всех активных классов
      this.classList.add('active'); // Добавление активного класса к текущему элементу
    });
  });
};
