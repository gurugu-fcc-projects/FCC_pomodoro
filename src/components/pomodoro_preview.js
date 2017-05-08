import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_preview.css';

class PomodoroPreview extends Component {
  render() {
    const { currentSessionLength, currentBreakLength } = this.props;

    return (
      <div className="preview">
        <div className="preview-session">
          <h3>SESSION</h3>
          <div>{currentSessionLength / 60}</div>
        </div>
        <div className="preview-break">
          <h3>BREAK</h3>
          <div>{currentBreakLength / 60}</div>
        </div>
      </div>
    );
  }
}

PomodoroPreview.propTypes = {
  currentSessionLength: PropTypes.number,
  currentBreakLength: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    currentSessionLength: state.data.currentSessionLength,
    currentBreakLength: state.data.currentBreakLength
  };
};

export default connect(mapStateToProps, actions)(PomodoroPreview);
