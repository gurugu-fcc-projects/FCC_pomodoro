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
    const { savedTimers } = this.props;

    const deleteTimer = (id) => {
      const newTimers = this.props.savedTimers.filter((timer) => {
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
            onClick={() => this.props.chooseTimer(timer.session, timer.break)}>
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


    return (
      <div>
        <div className="modal">
        </div>
        <div className="settings">
          <div className="saved-timers">
            {savedTimersList}
          </div>
        </div>
      </div>
    );
  }
}

PomodoroSettings.propTypes = {
  savedTimers: PropTypes.array,
  chooseTimer: PropTypes.func,
  updateSetTimers: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    savedTimers: state.data.savedTimers
  };
}

export default connect(mapStateToProps, actions)(PomodoroSettings);
