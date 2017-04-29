import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../style/pomodoro_preview.css';

class PomodoroPreview extends Component {
  render() {
    const { setTime } = this.props;
    
    return (
      <div className="preview">
        <div className="preview-session">
          <h3>SESSION</h3>
          <div>{setTime}</div>
        </div>
        <div className="preview-break">
          <h3>BREAK</h3>
          <div>5:00</div>
        </div>
      </div>
    );
  }
}

PomodoroPreview.propTypes = {
  setTime: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    setTime: state.data.setTime
  };
};

export default connect(mapStateToProps)(PomodoroPreview);
