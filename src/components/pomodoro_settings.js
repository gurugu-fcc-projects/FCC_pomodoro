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
    const savedTimersList = savedTimers.map((timers, index) => {
      return (
        <div
          key={index}
          onClick={() => this.props.chooseTimer(timers.session, timers.break)}
          className="saved-timer">
          <span className="saved-timer-values">
            {timers.session}-{timers.break}
          </span>
          <span className="saved-timer-close">
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
  chooseTimer: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    savedTimers: state.data.savedTimers
  };
}

export default connect(mapStateToProps, actions)(PomodoroSettings);
