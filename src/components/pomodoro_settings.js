import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { showHideSettings } from '../utils/common';
import '../../style/pomodoro_settings.css';

class PomodoroSettings extends Component {
  componentDidMount() {
    const setTimerButtons = document.querySelectorAll('.set-timer-button');
    let timeoutId, intervalId;

    const determineTimer = (elementClass) => {
      return elementClass.indexOf('session') !== -1 ? 'session' : 'break';
    }

    const determineNewValue = (elementClass, timer) => {
      const operation =  elementClass.indexOf('increase') !== -1 ? 'increase' : 'decrease';
      if (timer === 'session' && operation === 'increase') {
        return this.props.sessionLength + 1;
      } else if (timer === 'session' && operation === 'decrease') {
        return this.props.sessionLength - 1;
      } else if (timer === 'break' && operation === 'increase') {
        return this.props.breakLength + 1;
      } else if (timer === 'break' && operation === 'decrease') {
        return this.props.breakLength - 1;
      }
    }

    const increaseDecrease = (buttonClass, timer) => {
      const newValue = determineNewValue(buttonClass, timer);

      if (newValue < 1) { // min value 1
        return false;
      } else if (newValue > 99) { // max value 99
        return false;
      } else {
        this.props.changeTimerLength(timer, newValue);
      }
    }

    // show-hide settings panel
    window.addEventListener('click', (event) => {
      if (event.target === document.querySelector('.modal')) {
        showHideSettings();
      }
    });

    // increase-decrease timer with various speed
    setTimerButtons.forEach((button) => {
      button.addEventListener('mousedown', (event) => {
        const buttonClass = event.target.parentNode.classList[1];
        const timer = determineTimer(buttonClass);

        increaseDecrease(buttonClass, timer);

        timeoutId = window.setTimeout(() => {
          intervalId = window.setInterval(() => {
            increaseDecrease(buttonClass, timer);
          }, 200);
        }, 500);
      });
      button.addEventListener('mouseup', (event) => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      });
    });
  }

  render() {
    const {
      sessionLength,
      breakLength,
      savedTimers,
      statistics
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

    const increaseDecrease = (timer, currentValue, operation) => {
      // const newValue = operation === 'increase'
      //   ? currentValue + 1
      //   : currentValue - 1;
      //
      //
      // if (newValue < 1) { // min value 1
      //   return false;
      // } else if (newValue > 99) { // max value 99
      //   return false;
      // } else {
      //   this.props.changeTimerLength(timer, newValue);
      // }
    }

    const saveTimer = () => {
      const newTimer = {
        id: Date.now(),
        session: sessionLength,
        break: breakLength
      };

      this.props.updateSetTimers([...savedTimers, newTimer]);
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

    const statisticsList = statistics.map((pomodoro) => {
      return (
        <div key={pomodoro.id}>
          <div>Timer: {pomodoro.type}</div>
          <div>Length: {pomodoro.length}</div>
        </div>
      );
    });

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
              <div className="set-timer-button session-decrease" onClick={() => increaseDecrease('session', sessionLength, 'decrease')}>
                <i className="fa fa-minus-circle"></i>
              </div>
              <div className="set-timer-value">{sessionLength}</div>
              <div className="set-timer-button session-increase" onClick={() => increaseDecrease('session', sessionLength, 'increase')}>
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="set-timer">
              <div className="set-timer-title">BREAK</div>
              <div className="set-timer-button break-decrease" onClick={() => increaseDecrease('break', breakLength, 'decrease')}>
                <i className="fa fa-minus-circle"></i>
              </div>
              <div className="set-timer-value">{breakLength}</div>
              <div className="set-timer-button break-increase" onClick={() => increaseDecrease('break', breakLength, 'increase')}>
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="set-timers-button-save" onClick={saveTimer}>SAVE</div>
          </div>
          <div className="statistics">
            <h3>STATISTICS</h3>
            {statisticsList}
          </div>
        </div>
      </div>
    );
  }
}

PomodoroSettings.propTypes = {
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number,
  savedTimers: PropTypes.array,
  statistics: PropTypes.array,
  changeTimerLength: PropTypes.func,
  chooseTimer: PropTypes.func,
  updateSetTimers: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.data.sessionLength,
    breakLength: state.data.breakLength,
    savedTimers: state.data.savedTimers,
    statistics: state.data.statistics
  };
}

export default connect(mapStateToProps, actions)(PomodoroSettings);
