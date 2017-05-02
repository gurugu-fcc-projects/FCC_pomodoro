import {
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_RUNTIME
} from '../actions/types';

const INIT_STATE = {
  sessionLength: 10,
  breakLength: 5,
  currentTimer: 'session',
  runningTime: 10
}

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case RUN_TIMER:
      return {
        ...state,
        runningTime: action.payload
      };
    case CHANGE_TIMER:
      return {
        ...state,
        currentTimer: action.payload
      };
    case CHANGE_RUNTIME:
      return {
        ...state,
        runningTime: action.payload
      };
    default:
      return state;
  }
}
