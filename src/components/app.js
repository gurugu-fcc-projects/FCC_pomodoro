import React, { Component } from 'react';

import PomodoroMain from './pomodoro_main';
import PomodoroSettings from './pomodoro_settings';

import '../../style/global.css';
import '../../style/media.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <PomodoroMain />
        <PomodoroSettings />
      </div>
    );
  }
}
