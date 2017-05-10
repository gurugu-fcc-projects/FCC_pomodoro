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
  SAVE_END_TIME
} from './types';

export const startStopTimer = (runState) => {
  return {
    type: START_STOP_TIMER,
    payload: runState === 'start' ? true : false
  };
}

export const countBackwards = (timeBackwards) => {
  return {
    type: COUNT_BACKWARDS,
    payload: timeBackwards - 1
  };
}

export const countForwards = (timeForwards) => {
  return {
    type: COUNT_FORWARDS,
    payload: timeForwards + 1
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

export const changeTimerLength = (timer, newValue) => {
  return {
    type: CHANGE_TIMER_LENGTH,
    payload: {
      length: timer === 'session' ? 'sessionLength' : 'breakLength',
      newValue: newValue
    }
  };
}

export const resetAll = () => {
  return {
    type: RESET_ALL
  };
}

export const chooseTimer = (sessionLength, breakLength) => {
  return {
    type: CHOOSE_TIMER,
    payload: {
      sessionLength: sessionLength * 60,
      breakLength: breakLength * 60
    }
  };
}

export const updateSetTimers = (newTimers) => {
  return {
    type: UPDATE_SET_TIMERS,
    payload: newTimers
  };
}

export const saveTimerData = () => {
  return {
    type: SAVE_TIMER_DATA
  };
}

export const saveStartTime = (time) => {
  return {
    type: SAVE_START_TIME,
    payload: time
  };
}

export const saveEndTime = (time) => {
  return {
    type: SAVE_END_TIME,
    payload: time
  };
}
