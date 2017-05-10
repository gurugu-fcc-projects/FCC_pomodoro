import {
  START_STOP_TIMER,
  COUNT_BACKWARDS,
  COUNT_FORWARDS,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  // CHANGE_RUNTIME,
  RESET_ALL,
  CHOOSE_TIMER,
  UPDATE_SET_TIMERS,
  SAVE_OLD_POMODORO,
  SAVE_START_TIME,
  SAVE_END_TIME
} from '../actions/types';

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
  statistics: [],
  pomodoroStart: '',
  pomodoroEnd: ''
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
        displayedCount: action.payload.runningTime
      };
    case CHANGE_TIMER_LENGTH:
      return {
        ...state,
        [action.payload.length]: action.payload.newValue
      };
    // case CHANGE_RUNTIME:
    //   return {
    //     ...state,
    //     timeBackwards: action.payload
    //   };
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
        displayedCount: action.payload.sessionLength,
        isRunning: false
      };
    case UPDATE_SET_TIMERS:
      return {
        ...state,
        savedTimers: action.payload
      };
    case SAVE_OLD_POMODORO:
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
          start: state.pomodoroStart,
          end: state.pomodoroEnd
        }]
      };
    case SAVE_START_TIME:
      return {
        ...state,
        pomodoroStart: action.payload
      };
    case SAVE_END_TIME:
      return {
        ...state,
        pomodoroEnd: action.payload
      };
    default:
      return state;
  }
};
