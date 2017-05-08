import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import '../../style/pomodoro_timer.css';

class PomodoroTimer extends Component {
  render() {
    const { runningTime, currentTimer } = this.props;

    const showRunningTime = (runningTime) => {
      const h = Math.floor(runningTime / 3600);
      const m = Math.floor(runningTime % 3600 / 60);
      const s = Math.floor(runningTime % 3600 % 60);

      return (
        (h > 0 ? h + ':' (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s
      );
    }

    return (
      <div className="timer">
        <h3>{currentTimer}</h3>
        {showRunningTime(runningTime)}
      </div>
    );
  }
}

PomodoroTimer.propTypes = {
  runningTime: PropTypes.number,
  currentTimer: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    runningTime: state.data.runningTime,
    currentTimer: state.data.currentTimer
  };
}

export default connect(mapStateToProps)(PomodoroTimer);
