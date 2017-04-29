import {
  RUN_TIMER
} from './types';

export const updateTime = (runningTime) => {
  return {
    type: RUN_TIMER,
    payload: runningTime - 1
  };
}
