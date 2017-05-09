import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  CHANGE_RUNTIME,
  RESET_ALL,
  CHOOSE_TIMER,
  UPDATE_SET_TIMERS,
  SAVE_OLD_POMODOROS
} from '../actions/types';

const INIT_STATE = {
  currentSessionLength: 1500,
  currentBreakLength: 300,
  sessionLength: 1,
  breakLength: 1,
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
  ],
  oldPomodoros: []
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
        runningTime: state.currentSessionLength,
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
    case SAVE_OLD_POMODOROS:
      console.log(state.oldPomodoros);
      return {
        ...state,
        oldPomodoros: [...state.oldPomodoros, {
          type: action.payload.type,
          length: action.payload.length
        }]
      };
    default:
      return state;
  }
};
