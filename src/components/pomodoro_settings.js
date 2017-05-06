import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { showHideSettings } from '../utils/common';
import '../../style/pomodoro_settings.css';

class PomodoroSettings extends Component {
  componentDidMount() {
    window.addEventListener('click', (event) => {
      if (event.target === document.querySelector('.modal')) {
        showHideSettings();
      }
    });
  }

  render() {
    const {
      sessionLength,
      breakLength,
      isRunning,
      currentTimer,
      savedTimers
    } = this.props;

    const chooseTimer = (event, sessionLength, breakLength) => {
      const timer = event.target.parentNode;
      const allTimers = [...document.querySelectorAll('.saved-timer')];

      if (timer.classList.contains('selected')) {
        timer.classList.remove('selected');
      } else {
        allTimers.forEach((timer) => timer.classList.remove('selected'));
        timer.classList.add('selected');
      }
      this.props.chooseTimer(sessionLength, breakLength);
    }

    const deleteTimer = (id) => {
      const newTimers = savedTimers.filter((timer) => {
        return timer.id !== id;
      });
      this.props.updateSetTimers(newTimers);
    }

    const savedTimersList = savedTimers.map((timer) => {
      return (
        <div
          key={timer.id}
          className="saved-timer">
          <span
            className="saved-timer-values"
            onClick={(event) => chooseTimer(event, timer.session, timer.break)}>
            {timer.session}-{timer.break}
          </span>
          <span
            className="saved-timer-close"
            onClick={() => deleteTimer(timer.id)}>
            <i className="fa fa-close"></i>
          </span>
        </div>
      );
    });

    /* button - increase-decrease */
    const increaseDecrease = (timer, newValue) => {
      const isCurrentTimer = timer === currentTimer;
      return isRunning
        ? false
        : this.props.changeTimerLength(timer, newValue, isCurrentTimer);
    }

    return (
      <div>
        <div className="modal">
        </div>
        <div className="settings">
          <div className="saved-timers">
            {savedTimersList}
          </div>
          <div className="set-timers">
            <div className="set-timer">
              <div className="set-timer-title">SESSION</div>
              <div className="set-timer-button" onClick={() => increaseDecrease('session', sessionLength - 1)}>
                <i className="fa fa-minus-circle"></i>
              </div>
              <div className="set-timer-value">{sessionLength}</div>
              <div className="set-timer-button" onClick={() => increaseDecrease('session', sessionLength + 1)}>
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="set-timer">
              <div className="set-timer-title">BREAK</div>
              <div className="set-timer-button" onClick={() => increaseDecrease('break', breakLength - 1)}>
                <i className="fa fa-minus-circle"></i>
              </div>
              <div className="set-timer-value">{breakLength}</div>
              <div className="set-timer-button" onClick={() => increaseDecrease('break', breakLength + 1)}>
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="set-timers-buttons">
              <div className="set-timers-buttons-set">SET</div>
              <div className="set-timers-buttons-save">SAVE</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PomodoroSettings.propTypes = {
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number,
  isRunning: PropTypes.bool,
  currentTimer: PropTypes.string,
  savedTimers: PropTypes.array,
  changeTimerLength: PropTypes.func,
  chooseTimer: PropTypes.func,
  updateSetTimers: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.data.sessionLength,
    breakLength: state.data.breakLength,
    isRunning: state.data.isRunning,
    currentTimer: state.data.currentTimer,
    savedTimers: state.data.savedTimers
  };
}

export default connect(mapStateToProps, actions)(PomodoroSettings);
