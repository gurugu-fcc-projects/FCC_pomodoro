import {
  RUN_TIMER
} from '../actions/types';

const INIT_STATE = {
  setTime: 25,
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
