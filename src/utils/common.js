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

export const testData = [
  {
    id: 1,
    type: 'session',
    length: 1600,
    planned: 1500,
    overdue: 100,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 2,
    type: 'break',
    length: 1700,
    planned: 1500,
    overdue: 200,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 3,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 4,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 5,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 6,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 7,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 8,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 9,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 10,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 11,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 12,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 13,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 14,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 15,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 16,
    type: 'break',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  },
  {
    id: 17,
    type: 'session',
    length: 2000,
    planned: 1500,
    overdue: 500,
    start: '12:00:00',
    end: '12:00:00'
  }
];
