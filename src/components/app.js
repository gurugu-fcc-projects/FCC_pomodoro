import React, { Component } from 'react';

import PomodoroPreview from './pomodoro_preview';
import PomodoroTimer from './pomodoro_timer';
import PomodoroButtons from './pomodoro_buttons';
import PomodoroSettings from './pomodoro_settings';

export default class App extends Component {
  render() {
    return (
      <div>
        <PomodoroPreview />
        <PomodoroTimer />
        <PomodoroButtons />
        <PomodoroSettings />
      </div>
    );
  }
}
