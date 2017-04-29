import { RUN_TIMER } from '../../src/actions/types';
import { runTimer } from '../../src/actions/index';

describe('runTimer', () => {
  it('returns a number minus one', () => {
    expect(runTimer(1111)).toEqual(111);
  });
});
