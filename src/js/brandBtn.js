export function brandBtn() {
  document.querySelector('.brand__toggle-container').addEventListener('click', function() {
    const brandContainer = document.querySelector('.brand__container');

    // Переключаем класс expanded
    brandContainer.classList.toggle('expand');

    // Меняем текст кнопки в зависимости от состояния
    const btnText = document.querySelector('.brand__read-more');
    if (brandContainer.classList.contains('expand')) {
      btnText.textContent = 'Скрыть';
    } else {
      btnText.textContent = 'Показать все';
    }
  });

}
