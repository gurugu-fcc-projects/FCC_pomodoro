import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PomodoroPreview from './pomodoro_preview';
import PomodoroTimer from './pomodoro_timer';
import PomodoroButtons from './pomodoro_buttons';

import '../../style/pomodoro_main.css';

class PomodoroMain extends Component {
  render() {
    const { message } = this.props;

    return (
      <div className="pomodoro">
        <div className="pomodoro-main">
          <PomodoroPreview />
          <PomodoroTimer />
          <PomodoroButtons />
        </div>
        <div className="message">{message}</div>
        <div className="footer">Created by <span>GuRuGuMaWaRu</span>, 2017</div>
      </div>
    );
  }
}

PomodoroMain.propTypes = {
  message: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    message: state.data.message
  };
}

export default connect(mapStateToProps)(PomodoroMain);
