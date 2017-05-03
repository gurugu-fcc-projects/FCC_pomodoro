import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  CHANGE_RUNTIME,
  RESET_ALL
} from '../actions/types';

const INIT_STATE = {
  sessionLength: 10,
  breakLength: 5,
  runningTime: 10,
  isRunning: false,
  currentTimer: 'session'
};

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case START_STOP_TIMER:
      return {
        ...state,
        isRunning: action.payload
      };
    case RUN_TIMER:
      return {
        ...state,
        runningTime: action.payload
      };
    case CHANGE_TIMER:
      return {
        ...state,
        currentTimer: action.payload.timer,
        runningTime: action.payload.runningTime
      };
    case CHANGE_TIMER_LENGTH:
      const { length, newValue, isCurrentTimer } = action.payload;

      return isCurrentTimer
        ? { ...state, [length]: newValue, runningTime: newValue}
        : { ...state, [length]: newValue}
    case CHANGE_RUNTIME:
      return {
        ...state,
        runningTime: action.payload
      };
    case RESET_ALL:
      return {
        ...state,
        runningTime: state.sessionLength,
        isRunning: false,
        currentTimer: 'session'
      };
    default:
      return state;
  }
};
