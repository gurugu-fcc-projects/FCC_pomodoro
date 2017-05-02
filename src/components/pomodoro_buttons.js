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
    /* helper = runningTime countdown */
    const countdown = () => {
      this.props.runningTime <= 0
        ? window.clearInterval(timer)
        : this.props.runTimer(this.props.runningTime);
    }
    /* helper = start timer */
    const startTimer = () => {
      this.props.startStopTimer('start');
      timer = window.setInterval(countdown, 1000);
    }
    /* helper = stop timer */
    const stopTimer = () => {
      this.props.startStopTimer('stop');
      window.clearInterval(timer);
    }
    /* switch to the next timer */
    const nextTimer = () => {
      stopTimer();
      this.props.changeTimer(currentTimer, sessionLength, breakLength);
      startTimer();
    }
    /* start-stop button */
    const toggleTimer = () => {
      isRunning
        ? stopTimer()
        : startTimer();
    }


    return (
      <div className="buttons">
        <button onClick={toggleTimer}>{isRunning ? 'STOP' : 'START'}</button>
        <button onClick={nextTimer}>NEXT</button>
        <button>RESET</button>
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
  changeTimer: PropTypes.func
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
