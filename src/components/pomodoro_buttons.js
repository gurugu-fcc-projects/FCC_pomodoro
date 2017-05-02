import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_buttons.css';

let timer;

class PomodoroButtons extends Component {
  render() {
    let { isRunning } = this.props;
    /* timer countdown inner function */
    const countdown = () => {
      if (this.props.runningTime <= 0) {
        window.clearInterval(timer);
      } else {
        this.props.runTimer(this.props.runningTime);
      }
    }
    /* start timer */
    const startStopTimer = () => {
      if (isRunning) {
        this.props.startStopTimer('stop');
        window.clearInterval(timer);
      } else {
        this.props.startStopTimer('start');
        timer = window.setInterval(countdown, 1000);
      }
    }

    const nextTimer = () => {
      window.clearInterval(timer);


      //=== switch to the next timer
      // this.props.currentTimer === 'session'
      //   ? this.props.changeTimer('break')
      //   : this.props.changeTimer('session');
      //=== change runningTime
      // this.props.currentTimer === 'session'
      //   ? this.props.changeRunningTime(this.props.breakLength)
      //   : this.props.changeRunningTime(this.props.sessionLength);
      // startTimer();
    }

    return (
      <div className="buttons">
        <button onClick={startStopTimer}>{isRunning ? 'STOP' : 'START'}</button>
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
  currentTimer: PropTypes.string,
  isRunning: PropTypes.bool,
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
