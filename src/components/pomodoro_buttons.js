import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_buttons.css';

class PomodoroButtons extends Component {
  render() {
    const startTimer = () => {
      //== clear previous interval
      window.clearInterval(timeInterval);
      // console.log('timeInterval', timeInterval);
      // if (timeInterval) {
      //   console.log('clearing previous');
      //   window.clearInterval(timeInterval);
      // }
      const timeInterval = window.setInterval(() => {
        if (this.props.runningTime <= 0) {
          window.clearInterval(timeInterval);
        } else {
          this.props.updateTime(this.props.runningTime);
        }
      }, 1000);
    }

    const nextTimer = () => {
      //=== switch to the next timer
      this.props.currentTimer === 'session'
        ? this.props.changeTimer('break')
        : this.props.changeTimer('session');
      //=== change runningTime
      this.props.currentTimer === 'session'
        ? this.props.changeRunningTime(this.props.breakTime)
        : this.props.changeRunningTime(this.props.sessionTime);
      startTimer();
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
  sessionTime: PropTypes.number,
  breakTime: PropTypes.number,
  runningTime: PropTypes.number,
  currentTimer: PropTypes.string,
  updateTime: PropTypes.func,
  changeTimer: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    sessionTime: state.data.sessionTime,
    breakTime: state.data.breakTime,
    runningTime: state.data.runningTime,
    currentTimer: state.data.currentTimer
  };
}

export default connect(mapStateToProps, actions)(PomodoroButtons);
