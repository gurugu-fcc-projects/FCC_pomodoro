import React, { Component } from 'react';

import '../../style/pomodoro_buttons.css';

export default class PomodoroButtons extends Component {
  render() {
    return (
      <div className="buttons">
        <button>START</button>
        <button>NEXT</button>
        <button>RESET</button>
      </div>
    );
  }
}
