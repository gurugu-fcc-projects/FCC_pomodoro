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
      currentTimer,
      timerStart
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
      /* play alarm sound */
      if (this.props.timeBackwards === 1) {
        var audio = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2015/02/Funny-doorbell-sound-3.mp3');
        audio.play();
      }
      if (this.props.isRunning === false) {
        stopTimer();
      } else if (this.props.timeBackwards <= 0) {
        this.props.countForwards(this.props.timeForwards);
      } else {
        this.props.countBackwards(this.props.timeBackwards);
      }
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
      if (timerStart) {
        this.props.saveTimerData();
      }
      this.props.changeTimer(currentTimer, currentSessionLength, currentBreakLength);
      startTimer();
    }
    /* button - reset */
    const resetAll = () => {
      stopTimer();
      this.props.resetAll();
    }

    return (
      <div>
        <div className="buttons">
          <div className="button divider-color" onClick={toggleTimer}>{this.props.isRunning ? 'STOP' : 'START'}</div>
          <div className="button divider-color" onClick={nextTimer}>NEXT</div>
          <div className="button divider-color" onClick={resetAll}>RESET</div>
        </div>
        <div className="button-settings" onClick={showHideSettings}><i className="fa fa-cog"></i></div>
      </div>
    );
  }
}

PomodoroButtons.propTypes = {
  currentSessionLength: PropTypes.number,
  currentBreakLength: PropTypes.number,
  timeBackwards: PropTypes.number,
  timeForwards: PropTypes.number,
  isRunning: PropTypes.bool,
  currentTimer: PropTypes.string,
  timerStart: PropTypes.string,
  startStopTimer: PropTypes.func,
  countBackwards: PropTypes.func,
  countForwards: PropTypes.func,
  changeTimer: PropTypes.func,
  resetAll: PropTypes.func,
  saveTimerData: PropTypes.func,
  saveStartTime: PropTypes.func,
  saveEndTime: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    currentSessionLength: state.data.currentSessionLength,
    currentBreakLength: state.data.currentBreakLength,
    timeBackwards: state.data.timeBackwards,
    timeForwards: state.data.timeForwards,
    isRunning: state.data.isRunning,
    currentTimer: state.data.currentTimer,
    timerStart: state.data.timerStart
  };
}

export default connect(mapStateToProps, actions)(PomodoroButtons);
