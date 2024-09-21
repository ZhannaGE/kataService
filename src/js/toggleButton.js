
export const setupButton = () => {
  const btnViews = document.querySelectorAll('.myBtn');
  const viewContainer = document.querySelector('.container');

  btnViews.forEach(btnView => {
    const textBtnReview = btnView.querySelector('.services__read-more');

    btnView.addEventListener('click', () => {
      textBtnReview.textContent = viewContainer.classList.contains('active') ? 'Показать все' : 'Скрыть';
      viewContainer.classList.toggle('active');

      const img = btnView.querySelector('.services__toggle-img');
      img.classList.toggle('rotate');
    });
  });
};
