import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { showHideSettings } from '../utils/common';
import '../../style/pomodoro_buttons.css';

let timer;

class PomodoroButtons extends Component {
  render() {
    let {
      currentSessionLength,
      currentBreakLength,
      currentTimer
    } = this.props;
    /* helper = stop timer */
    const stopTimer = () => {
      const currentDate = new Date();

      this.props.saveEndTime(currentDate.toLocaleTimeString('en-US', {hour12: false}));
      this.props.startStopTimer('stop');
      window.clearInterval(timer);
    }
    /* helper = runningTime countdown */
    const countdown = () => {
      this.props.runningTime <= 0 || this.props.isRunning === false
        ? stopTimer()
        : this.props.runTimer(this.props.runningTime);
    }
    /* helper = start timer */
    const startTimer = () => {
      const currentDate = new Date();

      this.props.saveStartTime(currentDate.toLocaleTimeString('en-US', {hour12: false}));
      this.props.startStopTimer('start');
      timer = window.setInterval(countdown, 1000);
    }
    /* button - start-stop */
    const toggleTimer = () => {
      this.props.isRunning
        ? stopTimer()
        : startTimer();
    }
    /* button - next */
    const nextTimer = () => {
      stopTimer();
      this.props.saveOldPomodoro(currentTimer);
      this.props.changeTimer(currentTimer, currentSessionLength, currentBreakLength);
      startTimer();
    }
    /* button - reset */
    const resetAll = () => {
      stopTimer();
      this.props.resetAll();
    }

    return (
      <div className="buttons">
        <button onClick={toggleTimer}>{this.props.isRunning ? 'STOP' : 'START'}</button>
        <button onClick={nextTimer}>NEXT</button>
        <button onClick={resetAll}>RESET</button>
        <div className="button-settings" onClick={showHideSettings}><i className="fa fa-cog"></i></div>
      </div>
    );
  }
}

PomodoroButtons.propTypes = {
  currentSessionLength: PropTypes.number,
  currentBreakLength: PropTypes.number,
  runningTime: PropTypes.number,
  isRunning: PropTypes.bool,
  currentTimer: PropTypes.string,
  startStopTimer: PropTypes.func,
  runTimer: PropTypes.func,
  changeTimer: PropTypes.func,
  resetAll: PropTypes.func,
  saveOldPomodoro: PropTypes.func,
  saveStartTime: PropTypes.func,
  saveEndTime: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    currentSessionLength: state.data.currentSessionLength,
    currentBreakLength: state.data.currentBreakLength,
    runningTime: state.data.runningTime,
    isRunning: state.data.isRunning,
    currentTimer: state.data.currentTimer,
  };
}

export default connect(mapStateToProps, actions)(PomodoroButtons);
