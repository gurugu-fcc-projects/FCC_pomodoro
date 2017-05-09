import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { showTime } from '../utils/common';
import '../../style/pomodoro_timer.css';

class PomodoroTimer extends Component {
  render() {
    const { runningTime, currentTimer } = this.props;

    return (
      <div className="timer">
        <h3>{currentTimer}</h3>
        {showTime(runningTime)}
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
