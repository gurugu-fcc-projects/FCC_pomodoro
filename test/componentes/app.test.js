import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../src/components/app';

const setup = () => {
  const enzymeWrapper = shallow(<App />);
  return { enzymeWrapper };
}

describe.skip('App', () => {
  let enzymeWrapper;

  beforeEach(() => {
    ({ enzymeWrapper } = setup());
  });

  it('renders without crashing', () => {
    expect(enzymeWrapper.hasClass('pomodoro')).toBe(true);
  });
});
