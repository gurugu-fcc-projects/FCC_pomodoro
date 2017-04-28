import React, { Component } from 'react';

import PomodoroTimer from './pomodoro_timer';
import PomodoroButtons from './pomodoro_buttons';
import PomodoroSettings from './pomodoro_settings';

export default class App extends Component {
  render() {
    return (
      <div>
        <PomodoroTimer />
        <PomodoroButtons />
        <PomodoroSettings />
      </div>
    );
  }
}
