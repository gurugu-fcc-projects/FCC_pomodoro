import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../../style/pomodoro_buttons.css';

class PomodoroButtons extends Component {
  render() {
    /*
     run startTimer for both START and NEXT buttons, but with the NEXT
     button it will change timer and only then run it
    */

    const startTimer = () => {
      // const runTimer = () => {
      //   if (this.props.runningTime <= 0) {
      //     window.clearInterval(timeInterval);
      //   } else {
      //     this.props.updateTime(this.props.runningTime);
      //   }
      // }
      const timeInterval = window.setInterval(() => {
        if (this.props.runningTime <= 0) {
          window.clearInterval(timeInterval);
        } else {
          this.props.updateTime(this.props.runningTime);
        }
      }, 1000);
    }

    return (
      <div className="buttons">
        <button onClick={startTimer}>START</button>
        <button>NEXT</button>
        <button>RESET</button>
      </div>
    );
  }
}

PomodoroButtons.propTypes = {
  runningTime: PropTypes.number,
  updateTime: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    runningTime: state.data.runningTime
  };
}

export default connect(mapStateToProps, actions)(PomodoroButtons);
