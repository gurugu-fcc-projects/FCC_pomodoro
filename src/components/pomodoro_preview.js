import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../style/pomodoro_preview.css';

class PomodoroPreview extends Component {
  render() {
    const { sessionLength, breakLength } = this.props;

    return (
      <div className="preview">
        <div className="preview-session">
          <h3>SESSION</h3>
          <button>+</button>
          <div>{sessionLength}</div>
          <button>-</button>
        </div>
        <div className="preview-break">
          <h3>BREAK</h3>
          <button>+</button>
          <div>{breakLength}</div>
          <button>-</button>
        </div>
      </div>
    );
  }
}

PomodoroPreview.propTypes = {
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.data.sessionLength,
    breakLength: state.data.breakLength
  };
};

export default connect(mapStateToProps)(PomodoroPreview);
