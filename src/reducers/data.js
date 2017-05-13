import {
  START_STOP_TIMER,
  COUNT_BACKWARDS,
  COUNT_FORWARDS,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  RESET_ALL,
  CHOOSE_TIMER,
  UPDATE_SET_TIMERS,
  SAVE_TIMER_DATA,
  SAVE_START_TIME,
  SAVE_END_TIME,
  SHOW_MESSAGE
} from '../actions/types';

import { testData } from '../utils/common';

const INIT_STATE = {
  currentSessionLength: 1500,
  currentBreakLength: 300,
  sessionLength: 1,
  breakLength: 1,
  timeBackwards: 1500,
  timeForwards: 0,
  displayedCount: 1500,
  isRunning: false,
  currentTimer: 'session',
  savedTimers: [
    {id: 1, session: 25, break: 5},
    {id: 2, session: 30, break: 5},
    {id: 3, session: 45, break: 10}
  ],
  statistics: [...testData],
  timerStart: '',
  timerEnd: '',
  message: ''
};

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case START_STOP_TIMER:
      return {
        ...state,
        isRunning: action.payload
      };
    case COUNT_BACKWARDS:
      return {
        ...state,
        timeBackwards: action.payload,
        displayedCount: action.payload
      };
    case COUNT_FORWARDS:
      return {
        ...state,
        timeForwards: action.payload,
        displayedCount: action.payload
      };
    case CHANGE_TIMER:
      return {
        ...state,
        currentTimer: action.payload.timer,
        timeBackwards: action.payload.runningTime,
        timeForwards: 0,
        displayedCount: action.payload.runningTime
      };
    case CHANGE_TIMER_LENGTH:
      return {
        ...state,
        [action.payload.length]: action.payload.newValue
      };
    case RESET_ALL:
      return {
        ...state,
        timeBackwards: state.currentSessionLength,
        displayedCount: state.currentSessionLength,
        isRunning: false,
        currentTimer: 'session'
      };
    case CHOOSE_TIMER:
      return {
        ...state,
        currentSessionLength: action.payload.sessionLength,
        currentBreakLength: action.payload.breakLength,
        timeBackwards: action.payload.sessionLength,
        timeForwards: 0,
        displayedCount: action.payload.sessionLength,
        isRunning: false
      };
    case UPDATE_SET_TIMERS:
      return {
        ...state,
        savedTimers: action.payload
      };
    case SAVE_TIMER_DATA:
      const originalLength = state.currentTimer === 'session'
        ? 'currentSessionLength'
        : 'currentBreakLength';

      return {
        ...state,
        statistics: [...state.statistics, {
          id: Date.now(),
          type: state.currentTimer,
          length: (state[originalLength] - state.timeBackwards) + state.timeForwards,
          planned: state[originalLength] - state.timeBackwards,
          overdue: state.timeForwards,
          start: state.timerStart,
          end: state.timerEnd
        }]
      };
    case SAVE_START_TIME:
      return {
        ...state,
        timerStart: action.payload
      };
    case SAVE_END_TIME:
      return {
        ...state,
        timerEnd: action.payload
      };
    case SHOW_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
