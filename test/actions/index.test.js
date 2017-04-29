import { RUN_TIMER } from '../../src/actions/types';
import { updateTime } from '../../src/actions/index';

describe('updateTime', () => {
  it('returns a number minus one', () => {
    const actionObject = {type: RUN_TIMER, payload: 9};

    expect(updateTime(10)).toEqual(actionObject);
  });
});
