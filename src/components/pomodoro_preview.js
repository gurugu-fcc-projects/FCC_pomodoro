import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_preview.css';

class PomodoroPreview extends Component {
  render() {
    const {
      sessionLength,
      breakLength,
      isRunning,
      currentTimer
    } = this.props;

    /* button - increase */
    const increaseDecrease = (timer, newValue) => {
      const isCurrentTimer = timer === currentTimer;
      return isRunning
        ? false
        : this.props.changeTimerLength(timer, newValue, isCurrentTimer);
    }

    return (
      <div className="preview">
        <div className="preview-session">
          <h3>SESSION</h3>
          <button onClick={() => increaseDecrease('session', sessionLength + 1)}>+</button>
          <div>{sessionLength}</div>
          <button onClick={() => increaseDecrease('session', sessionLength - 1)}>-</button>
        </div>
        <div className="preview-break">
          <h3>BREAK</h3>
          <button onClick={() => increaseDecrease('break', breakLength + 1)}>+</button>
          <div>{breakLength}</div>
          <button onClick={() => increaseDecrease('break', breakLength - 1)}>-</button>
        </div>
      </div>
    );
  }
}

PomodoroPreview.propTypes = {
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number,
  isRunning: PropTypes.bool,
  currentTimer: PropTypes.string,
  changeTimerLength: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.data.sessionLength,
    breakLength: state.data.breakLength,
    isRunning: state.data.isRunning,
    currentTimer: state.data.currentTimer
  };
};

export default connect(mapStateToProps, actions)(PomodoroPreview);
