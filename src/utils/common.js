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
  const h = Math.floor(time / 3600),
        m = Math.floor(time % 3600 / 60),
        s = Math.floor(time % 3600 % 60),
        hours = h > 0 ? h + ':' : '',
        minutes = (m < 10 ? '0' : '') + m + ':',
        seconds = (s < 10 ? '0' : '') + s;

  return hours + minutes + seconds;
}

export const showMessageField = () => {
  const messageField = document.querySelector('.message');

  messageField.classList.add('visible');
  window.setTimeout(() => {
    messageField.classList.remove('visible');
  }, 2000);
}
