import {
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_RUNTIME
} from './types';

export const updateTime = (runningTime) => {
  return {
    type: RUN_TIMER,
    payload: runningTime - 1
  };
}

export const changeTimer = (newTimer) => {
  return {
    type: CHANGE_TIMER,
    payload: newTimer
  };
}

export const changeRunningTime = (newRunningTime) => {
  return {
    type: CHANGE_RUNTIME,
    payload: newRunningTime
  };
}
