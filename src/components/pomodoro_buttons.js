import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_buttons.css';

let timer;

class PomodoroButtons extends Component {
  render() {
    let {
      sessionLength,
      breakLength,
      currentTimer,
      isRunning,
    } = this.props;
    /* helper = stop timer */
    const stopTimer = () => {
      this.props.startStopTimer('stop');
      window.clearInterval(timer);
    }
    /* helper = runningTime countdown */
    const countdown = () => {
      this.props.runningTime <= 0
        ? stopTimer()
        : this.props.runTimer(this.props.runningTime);
    }
    /* helper = start timer */
    const startTimer = () => {
      this.props.startStopTimer('start');
      timer = window.setInterval(countdown, 1000);
    }
    /* button - start-stop */
    const toggleTimer = () => {
      isRunning
        ? stopTimer()
        : startTimer();
    }
    /* button - next */
    const nextTimer = () => {
      stopTimer();
      this.props.changeTimer(currentTimer, sessionLength, breakLength);
      startTimer();
    }
    /* button - reset */
    const resetAll = () => {
      stopTimer();
      this.props.resetAll();
    }

    return (
      <div className="buttons">
        <button onClick={toggleTimer}>{isRunning ? 'STOP' : 'START'}</button>
        <button onClick={nextTimer}>NEXT</button>
        <button onClick={resetAll}>RESET</button>
      </div>
    );
  }
}

PomodoroButtons.propTypes = {
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number,
  runningTime: PropTypes.number,
  isRunning: PropTypes.bool,
  currentTimer: PropTypes.string,
  startStopTimer: PropTypes.func,
  runTimer: PropTypes.func,
  changeTimer: PropTypes.func,
  resetAll: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.data.sessionLength,
    breakLength: state.data.breakLength,
    runningTime: state.data.runningTime,
    currentTimer: state.data.currentTimer,
    isRunning: state.data.isRunning
  };
}

export default connect(mapStateToProps, actions)(PomodoroButtons);
