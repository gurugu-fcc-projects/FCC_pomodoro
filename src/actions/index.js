import {
  RUN_TIMER,
  CHANGE_TIMER
} from './types';

export const updateTime = (runningTime) => {
  return {
    type: RUN_TIMER,
    payload: runningTime - 1
  };
}

export const changeTimer = (currentTimer) => {
  return currentTimer === 'session'
    ? {type: CHANGE_TIMER, payload: 'break'}
    : {type: CHANGE_TIMER, payload: 'session'};
}
