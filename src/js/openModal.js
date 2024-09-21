export const openModal = () => {
  const callButtons = document.querySelectorAll('.info-item_button-call');
  const chatButtons = document.querySelectorAll('.info-item_button-chat');
  const modalCall = document.querySelector('.call');
  const modalChat = document.querySelector('.feedback');
  const callCloseButton = document.querySelector('.call__close-button');
  const feedbackCloseButton = document.querySelector('.feedback__close-button');

  // Обработчик открытия модального окна звонка
  callButtons.forEach(callButton => {
    callButton.addEventListener('click', (e) => {
      modalCall.classList.toggle('call-open');
    });
  });

  // Обработчик открытия модального окна чата
  chatButtons.forEach(chatButton => {
    chatButton.addEventListener('click', (e) => {
      modalChat.classList.toggle('feedback--open');
    });
  });

  // Закрытие по клику на кнопку закрытия (звонок)
  callCloseButton.addEventListener('click', (e) => {
    modalCall.classList.remove('call-open');
  });

  // Закрытие по клику на кнопку закрытия (чат)
  feedbackCloseButton.addEventListener('click', (e) => {
    modalChat.classList.remove('feedback--open');
  });

  // Закрытие модального окна по клику на overlay (затемненная область)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('call')) {
      modalCall.classList.remove('call-open');
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('feedback')) {
      modalChat.classList.remove('feedback--open');
    }
  });
};
