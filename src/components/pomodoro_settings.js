import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { showHideSettings, showTime, showMessageField } from '../utils/common';
import '../../style/pomodoro_settings.css';

class PomodoroSettings extends Component {
  componentDidMount() {
    const setTimerButtons = document.querySelectorAll('.set-timer-button');
    let timeoutId, intervalId, timeoutIdTwo, intervalIdTwo;


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
        this.props.showMessage('Minimum value reached!');
        showMessageField();
        return false;
      } else if (newValue > 99) { // max value 99
        this.props.showMessage('Maximum value reached!');
        showMessageField();
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

        timeoutIdTwo = window.setTimeout(() => {
          clearInterval(intervalId);
          intervalIdTwo = window.setInterval(() => {
            increaseDecrease(buttonClass, timer);
          }, 50);
        }, 2500);

      });
      button.addEventListener('mouseup', (event) => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        clearInterval(intervalIdTwo);
        clearTimeout(timeoutIdTwo);
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

    const saveTimer = () => {
      const newTimer = {
        id: Date.now(),
        session: sessionLength,
        break: breakLength
      };

      if (savedTimers.length < 12) {
        this.props.updateSetTimers([...savedTimers, newTimer]);
      } else {
        this.props.showMessage('Maximum number of timers reached!');
        showMessageField();
      }
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

    const overdueTime = (pomodoro) => {
      return pomodoro.overdue > 0
        ? <div>({showTime(pomodoro.planned)}/<span>{showTime(pomodoro.overdue)}</span>)</div>
        : '';
    }

    const statisticsList = statistics.map((pomodoro) => {
      return (
        <div key={pomodoro.id} className="statistics-timer">
          <div className="statistics-timer-main">
            <span>{pomodoro.type}</span>
            <span>{pomodoro.start}  -  {pomodoro.end}</span>
          </div>
          <div className="statistics-timer-sub">
            <span>
              {showTime(pomodoro.length)}
            </span>
            <span>
              {overdueTime(pomodoro)}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="modal">
        </div>
        <aside className="settings">
          <section className="saved-timers">
            {savedTimersList}
          </section>
          <section className="set-timers">
            <div className="set-timer">
              <div className="set-timer-title">SESSION</div>
              <div className="set-timer-button session-decrease">
                <i className="fa fa-minus-circle"></i>
              </div>
              <div className="set-timer-value">{sessionLength}</div>
              <div className="set-timer-button session-increase">
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="set-timer">
              <div className="set-timer-title">BREAK</div>
              <div className="set-timer-button break-decrease">
                <i className="fa fa-minus-circle"></i>
              </div>
              <div className="set-timer-value">{breakLength}</div>
              <div className="set-timer-button break-increase">
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="set-timers-button-save" onClick={saveTimer}>SAVE</div>
          </section>
          <h3 className="statistics-title">STATISTICS</h3>
          <section className="statistics">
            <div className="statistics-inside">
              {statisticsList}
            </div>
          </section>
        </aside>
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
  updateSetTimers: PropTypes.func,
  showMessage: PropTypes.func
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
