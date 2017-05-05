import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  CHANGE_RUNTIME,
  RESET_ALL,
  CHOOSE_TIMER
} from '../actions/types';

const INIT_STATE = {
  sessionLength: 10,
  breakLength: 5,
  runningTime: 10,
  isRunning: false,
  currentTimer: 'session',
  savedTimers: [
    {
      session: 25,
      break: 5
    },
    {
      session: 30,
      break: 5
    },
    {
      session: 45,
      break: 10
    }
  ]
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
    case CHOOSE_TIMER:
      return {
        ...state,
        sessionLength: action.payload.sessionLength,
        breakLength: action.payload.breakLength,
        runningTime: action.payload.sessionLength,
        isRunning: false
      };
    default:
      return state;
  }
};
