import React from 'react';
import { render } from 'enzyme';
import Results from '../components/Results';

describe('results component', () => {
  it('is empty by default', () => {
    const component = render(<Results />);
    expect(component.html()).toBeFalsy();
  });
});
