export function techBtn() {
  document.querySelector('.tech__toggle-container').addEventListener('click', function() {
    const techContainer = document.querySelector('.tech__container');

    // Переключаем класс expanded
    techContainer.classList.toggle('expanded');

    // Меняем текст кнопки в зависимости от состояния
    const btnText = document.querySelector('.tech__read-more');
    if (techContainer.classList.contains('expanded')) {
      btnText.textContent = 'Скрыть';
    } else {
      btnText.textContent = 'Показать все';
    }
  });

}
