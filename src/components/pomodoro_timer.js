import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { showTime } from '../utils/common';
import '../../style/pomodoro_timer.css';

class PomodoroTimer extends Component {
  render() {
    const { timeForwards, displayedCount, currentTimer } = this.props;

    return (
      <div className="timer">
        <h3>{currentTimer}</h3>
        <div className={timeForwards > 0 ? 'timer-overdue' : ''}>
          {(timeForwards > 0 ? '-' : '') + showTime(displayedCount)}
        </div>
      </div>
    );
  }
}

PomodoroTimer.propTypes = {
  timeForwards: PropTypes.number,
  displayedCount: PropTypes.number,
  currentTimer: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    timeForwards: state.data.timeForwards,
    displayedCount: state.data.displayedCount,
    currentTimer: state.data.currentTimer
  };
}

export default connect(mapStateToProps)(PomodoroTimer);
