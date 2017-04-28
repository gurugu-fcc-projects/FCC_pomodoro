import React, { Component } from 'react';

import '../../style/pomodoro_timer.css';

export default class PomodoroTimer extends Component {
  render() {
    const time = '25:00';

    return (
      <div className="timer">
        {time}
      </div>
    );
  }
}
