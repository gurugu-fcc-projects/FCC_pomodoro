import {
  UPDATE_SET_TIMERS,
} from '../actions/types';

const INIT_STATE = {
  savedTimers: [
    {id: 1, session: 25, break: 5},
    {id: 2, session: 30, break: 5},
    {id: 3, session: 45, break: 10}
  ]
};

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case UPDATE_SET_TIMERS:
      return {
        ...state,
        savedTimers: action.payload
      };
    default:
      return state;
  }
}
