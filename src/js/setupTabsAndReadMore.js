export const setupTabsAndReadMore = () => {

  const tabs = document.querySelectorAll('.services__tab');
  const readMoreBtn = document.querySelector('.services__read-more');
  const text = document.querySelector('.services__text');

  // Логика для вкладок
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const activeTab = document.querySelector('.services__tab--active');
      if (activeTab) {
        activeTab.classList.remove('services__tab--active');
      }
      tab.classList.add('services__tab--active');
    });
  });

  // Логика для кнопки "Читать далее"
  readMoreBtn.addEventListener('click', () => {
    text.classList.toggle('services__text-hidden');
    readMoreBtn.textContent = readMoreBtn.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее';
  });
};
