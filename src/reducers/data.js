import {
  RUN_TIMER
} from '../actions/types';

const INIT_STATE = {
  sessionTime: 25,
  breakTime: 5,
  currentTimer: 'sessionTimer',
  runningTime: 25
}

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case RUN_TIMER:
      return {
        ...state,
        runningTime: action.payload
      };
    default:
      return state;
  }
}
