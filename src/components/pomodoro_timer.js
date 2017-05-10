import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { showTime } from '../utils/common';
import '../../style/pomodoro_timer.css';

class PomodoroTimer extends Component {
  render() {
    const { displayedCount, currentTimer } = this.props;

    return (
      <div className="timer">
        <h3>{currentTimer}</h3>
        {showTime(displayedCount)}
      </div>
    );
  }
}

PomodoroTimer.propTypes = {
  displayedCount: PropTypes.number,
  currentTimer: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    displayedCount: state.data.displayedCount,
    currentTimer: state.data.currentTimer
  };
}

export default connect(mapStateToProps)(PomodoroTimer);
