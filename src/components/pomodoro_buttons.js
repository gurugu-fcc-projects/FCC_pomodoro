import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_buttons.css';

let timer;

class PomodoroButtons extends Component {
  render() {
    const countdown = () => {
      if (this.props.runningTime <= 0) {
        window.clearInterval(timer);
      } else {
        this.props.updateTime(this.props.runningTime);
      }
    }

    const startTimer = () => {
      timer = window.setInterval(countdown, 1000);
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
        <button onClick={startTimer}>START</button>
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
  updateTime: PropTypes.func,
  changeTimer: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.data.sessionLength,
    breakLength: state.data.breakLength,
    runningTime: state.data.runningTime,
    currentTimer: state.data.currentTimer
  };
}

export default connect(mapStateToProps, actions)(PomodoroButtons);
