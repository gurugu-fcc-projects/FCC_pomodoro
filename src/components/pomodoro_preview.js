import React, { Component } from 'react';

import '../../style/pomodoro_preview.css';

export default class PomodoroPreview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="preview-session">
          <h3>SESSION</h3>
          <div>25:00</div>
        </div>
        <div className="preview-break">
          <h3>BREAK</h3>
          <div>5:00</div>
        </div>
      </div>
    );
  }
}
