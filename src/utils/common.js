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

  return (
    (h > 0 ? h + ':' (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s
  );
}
