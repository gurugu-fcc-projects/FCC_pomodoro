import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_TIMER_LENGTH,
  CHANGE_RUNTIME,
  RESET_ALL,
  CHOOSE_TIMER,
  UPDATE_SET_TIMERS
} from '../../src/actions/types';

import {
  startStopTimer,
  runTimer,
  changeTimer,
  changeTimerLength,
  changeRunningTime,
  resetAll,
  chooseTimer,
  updateSetTimers
} from '../../src/actions/index';

describe('startStopTimer', () => {
  it('sets timer state as running', () => {
    const actionObject = {type: START_STOP_TIMER, payload: true};
    expect(startStopTimer('start')).toEqual(actionObject);
  });
  it('sets timer state as stopped', () => {
    const actionObject = {type: START_STOP_TIMER, payload: false};
    expect(startStopTimer('stop')).toEqual(actionObject);
  });
});

describe('runTimer', () => {
  it('returns a number minus one', () => {
    const actionObject = {type: RUN_TIMER, payload: 9};
    expect(runTimer(10)).toEqual(actionObject);
  });
});

describe('changeTimer', () => {
  it('switches from session to break timer', () => {
    const actionObject = {type: CHANGE_TIMER, payload: {
      timer: 'break',
      runningTime: 5
    }};
    expect(changeTimer('session', 25, 5)).toEqual(actionObject);
  });
  it('switches from break to session timer', () => {
    const actionObject = {type: CHANGE_TIMER, payload: {
      timer: 'session',
      runningTime: 25
    }};
    expect(changeTimer('break', 25, 5)).toEqual(actionObject);
  });
});

describe('changeTimerLength', () => {
  it('changes session length with current session timer', () => {
    const actionObject = {type: CHANGE_TIMER_LENGTH, payload: {
      length: 'sessionLength',
      newValue: 25
    }};
    expect(changeTimerLength('session', 25)).toEqual(actionObject);
  });
  it('changes session length with current break timer', () => {
    const actionObject = {type: CHANGE_TIMER_LENGTH, payload: {
      length: 'sessionLength',
      newValue: 25
    }};
    expect(changeTimerLength('session', 25)).toEqual(actionObject);
  });
  it('changes break length with current break timer', () => {
    const actionObject = {type: CHANGE_TIMER_LENGTH, payload: {
      length: 'breakLength',
      newValue: 25
    }};
    expect(changeTimerLength('break', 25)).toEqual(actionObject);
  });
  it('changes break length with current break timer', () => {
    const actionObject = {type: CHANGE_TIMER_LENGTH, payload: {
      length: 'breakLength',
      newValue: 25
    }};
    expect(changeTimerLength('break', 25)).toEqual(actionObject);
  });
});

describe('changeRunningTime', () => {
  it('changes current runningTime from SESSION to BREAK', () => {
    const actionObject = {type: CHANGE_RUNTIME, payload: 5};
    expect(changeRunningTime(5)).toEqual(actionObject);
  });
  it('changes current runningTime from BREAK to SESSION', () => {
    const actionObject = {type: CHANGE_RUNTIME, payload: 25};
    expect(changeRunningTime(25)).toEqual(actionObject);
  });
})

describe('resetAll', () => {
  it('resets to initial state', () => {
    const actionObject = {type: RESET_ALL};
    expect(resetAll()).toEqual(actionObject);
  });
});

describe('chooseTimer', () => {
  it('chooses new timer', () => {
    const actionObject = {type: CHOOSE_TIMER, payload: {
      sessionLength: 25,
      breakLength: 5
    }};
    expect(chooseTimer(25, 5)).toEqual(actionObject);
  });
});

describe('updateSetTimers', () => {
  it('changes set timers', () => {
    const actionObject = {type: UPDATE_SET_TIMERS, payload:
      [{id: 1, session: 25, break: 5}]};
    expect(updateSetTimers([{id: 1, session: 25, break: 5}])).toEqual(actionObject);
  });
});
