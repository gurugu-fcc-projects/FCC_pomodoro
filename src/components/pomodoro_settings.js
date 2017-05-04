import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import '../../style/pomodoro_settings.css';

class PomodoroSettings extends Component {
  componentDidMount() {
    const settingsElement = document.querySelector('.settings'),
          modalElement = document.querySelector('.modal');

    window.addEventListener('click', (event) => {
      if (event.target === modalElement) {
        if (settingsElement.classList.contains('settings-show')) {
          settingsElement.classList.remove('settings-show');
          modalElement.classList.remove('modal-show');
        } else {
          settingsElement.classList.add('settings-show');
          modalElement.classList.add('modal-show');
        }
      }
    });

  }
  render() {
    const { savedTimers } = this.props;
    const savedTimersList = savedTimers.map((timers, index) => {
      return (
        <div key={index}>{timers.session}-{timers.break}</div>
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
  savedTimers: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    savedTimers: state.data.savedTimers
  };
}

export default connect(mapStateToProps)(PomodoroSettings);
