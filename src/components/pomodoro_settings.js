import React, { Component } from 'react';

import '../../style/pomodoro_settings.css';

export default class PomodoroSettings extends Component {
  componentDidMount() {
    const settingsElement = document.querySelector('.settings'),
          modalElement = document.querySelector('.modal');

    window.addEventListener('click', (event) => {
      // console.log('clicking', event.target);
      // console.log('modalElement', modalElement);
      if (event.target === modalElement) {
        // console.log('modalElement is clicked');
        // modalElement.style.display = 'none';
        if (settingsElement.classList.contains('settings-show')) {
          settingsElement.classList.remove('settings-show');
          modalElement.classList.remove('modal-show');
        } else {
          settingsElement.classList.add('settings-show');
          modalElement.classList.add('modal-show');
        }
        // document.querySelector('.modal').classList.remove('modal-show');
        // document.querySelector('.modal').classList.add('modal-hide');
      }
    });

  }
  render() {

    return (
      <div>
        <div className="modal">
        </div>
        <div className="settings">
          Pomodoro Settings
        </div>
      </div>
    );
  }
}
