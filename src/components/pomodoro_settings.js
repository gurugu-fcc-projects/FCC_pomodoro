import React, { Component } from 'react';

import '../../style/pomodoro_settings.css';

export default class PomodoroSettings extends Component {
  componentDidMount() {
    const modalElement = document.querySelector('.modal')

    window.addEventListener('click', (event) => {
      // console.log('clicking', event.target);
      // console.log('modalElement', modalElement);
      if (event.target === modalElement) {
        // console.log('modalElement is clicked');
        modalElement.style.display = 'none';
      }
    });

  }
  render() {

    return (
      <div className="modal">
        <div className="settings">
          Pomodoro Settings
        </div>
      </div>
    );
  }
}
