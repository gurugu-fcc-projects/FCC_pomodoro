import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_RUNTIME,
  RESET_ALL
} from './types';

export const startStopTimer = (runState) => {
  return {
    type: START_STOP_TIMER,
    payload: runState === 'start' ? true : false
  };
}

export const runTimer = (runningTime) => {
  return {
    type: RUN_TIMER,
    payload: runningTime - 1
  };
}

export const changeTimer = (currentTimer, sessionLength, breakLength) => {
  return {
    type: CHANGE_TIMER,
    payload: {
      timer: currentTimer === 'session' ? 'break' : 'session',
      runningTime: currentTimer === 'session' ? breakLength : sessionLength
    }
  };
}

export const changeRunningTime = (newRunningTime) => {
  return {
    type: CHANGE_RUNTIME,
    payload: newRunningTime
  };
}

export const resetAll = () => {
  return {
    type: RESET_ALL
  };
}
