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

export const showTime = (time) => {
  const h = Math.floor(time / 3600);
  const m = Math.floor(time % 3600 / 60);
  const s = Math.floor(time % 3600 % 60);

  const hours = h > 0 ? h + ':' : '';
  const minutes = (m < 10 ? '0' : '') + m + ':';
  const seconds = (s < 10 ? '0' : '') + s;

  return hours + minutes + seconds;
}

export const showMessageField = () => {
  const messageField = document.querySelector('.message');

  messageField.classList.add('visible');
  window.setTimeout(() => {
    messageField.classList.remove('visible');
  }, 2000);
}
