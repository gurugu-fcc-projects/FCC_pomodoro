import React, { Component } from 'react';

import PomodoroMain from './pomodoro_main';
import PomodoroSettings from './pomodoro_settings';

import '../../style/global.css';

export default class App extends Component {
  render() {
    return (
      <div className="app default-primary-color">
        <PomodoroMain />
        <PomodoroSettings />
      </div>
    );
  }
}
