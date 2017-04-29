import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import '../../style/pomodoro_timer.css';

class PomodoroTimer extends Component {
  render() {
    const { runningTime } = this.props;

    return (
      <div className="timer">
        {runningTime}
      </div>
    );
  }
}

PomodoroTimer.propTypes = {
  runningTime: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    runningTime: state.data.runningTime
  };
}

export default connect(mapStateToProps)(PomodoroTimer);
