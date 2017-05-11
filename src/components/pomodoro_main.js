import React, { Component } from 'react';

import PomodoroPreview from './pomodoro_preview';
import PomodoroTimer from './pomodoro_timer';
import PomodoroButtons from './pomodoro_buttons';

import '../../style/global.css';

export default class PomodoroMain extends Component {
  render() {
    return (
      <div className="pomodoro-main">
        <PomodoroPreview />
        <PomodoroTimer />
        <PomodoroButtons />
      </div>
    );
  }
}
