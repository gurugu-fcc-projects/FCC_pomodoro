export const showHideSettings = () => {
  const settingsElement = document.querySelector('.settings'),
        modalElement = document.querySelector('.modal');

  if (settingsElement.classList.contains('settings-show')) {
    settingsElement.classList.remove('settings-show');
    modalElement.classList.remove('modal-show');
  } else {
    settingsElement.classList.add('settings-show');
    modalElement.classList.add('modal-show');
  }
}
