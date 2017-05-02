import {
  START_STOP_TIMER,
  RUN_TIMER,
  CHANGE_TIMER,
  CHANGE_RUNTIME
} from '../../src/actions/types';
import {
  startStopTimer,
  runTimer,
  changeTimer,
  changeRunningTime
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
  it('passes new timer - break', () => {
    const actionObject = {type: CHANGE_TIMER, payload: 'break'};
    expect(changeTimer('break')).toEqual(actionObject);
  });
  it('passes new timer - session', () => {
    const actionObject = {type: CHANGE_TIMER, payload: 'session'};
    expect(changeTimer('session')).toEqual(actionObject);
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
