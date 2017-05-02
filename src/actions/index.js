import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_RUNTIME
} from './types';

export const startStopTimer = (runState) => {
  return {
    type: START_STOP_TIMER,
    payload: runState
  };
}

export const runTimer = (runningTime) => {
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
