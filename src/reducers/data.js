import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  CHANGE_RUNTIME,
  RESET_ALL,
  CHOOSE_TIMER,
  UPDATE_SET_TIMERS,
} from '../actions/types';

const INIT_STATE = {
  currentSessionLength: 25,
  currentBreakLength: 5,
  sessionLength: 0,
  breakLength: 0,
  runningTime: 1500,
  isRunning: false,
  currentTimer: 'session',
  savedTimers: [
    {
      id: 1,
      session: 25,
      break: 5
    },
    {
      id: 2,
      session: 30,
      break: 5
    },
    {
      id: 3,
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
      return {
        ...state,
        [action.payload.length]: action.payload.newValue
      };
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
        currentSessionLength: action.payload.sessionLength,
        currentBreakLength: action.payload.breakLength,
        runningTime: action.payload.sessionLength,
        isRunning: false
      };
    case UPDATE_SET_TIMERS:
      return {
        ...state,
        savedTimers: action.payload
      };
    default:
      return state;
  }
};
