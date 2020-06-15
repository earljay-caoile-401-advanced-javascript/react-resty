import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RESTy from '../components/RESTy';

describe('resty component', () => {
  it('updates the state correctly when we type into the input field and sends props to form component', () => {
    const component = mount(<RESTy />);
    const inputTextbox = component.find('input.textbox');
    const resDiv = component.find('div.result-root-0');

    expect(inputTextbox.text()).toBe('');
    expect(component.state('url')).toBe('');
    expect(Object.keys(resDiv).length).toBe(0);

    const urlChangeEvent = {
      target: {
        value: 'https://pokeapi.co/api/v2/pokemon/ditto',
      },
    };

    inputTextbox.simulate('change', urlChangeEvent);
    expect(component.state('url')).toBe(
      'https://pokeapi.co/api/v2/pokemon/ditto'
    );

    const submitBtn = component.find('button#submit-btn');
    submitBtn.simulate('click');
    expect(resDiv).toBeDefined();
  });
});
