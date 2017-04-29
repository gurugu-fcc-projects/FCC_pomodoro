import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../style/pomodoro_preview.css';

class PomodoroPreview extends Component {
  render() {
    const { sessionTime, breakTime } = this.props;

    return (
      <div className="preview">
        <div className="preview-session">
          <h3>SESSION</h3>
          <div>{sessionTime}</div>
        </div>
        <div className="preview-break">
          <h3>BREAK</h3>
          <div>{breakTime}</div>
        </div>
      </div>
    );
  }
}

PomodoroPreview.propTypes = {
  sessionTime: PropTypes.number,
  breakTime: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    sessionTime: state.data.sessionTime,
    breakTime: state.data.breakTime
  };
};

export default connect(mapStateToProps)(PomodoroPreview);
