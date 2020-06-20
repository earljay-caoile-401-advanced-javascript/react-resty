import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('App component', () => {
  it('updates the state correctly when we type into the input field and sends props to form component', async () => {
    const component = mount(<App />);
    const inputTextbox = component.find('input.url-textbox');
    expect(inputTextbox.text()).toBe('');
    expect(component.state('url')).toBe('');

    const urlChangeEvent = {
      target: {
        value: 'https://cf-js-401-api-server.herokuapp.com/api/v1/categories',
      },
    };
    inputTextbox.simulate('change', urlChangeEvent);

    expect(component.state('url')).toBe(
      'https://cf-js-401-api-server.herokuapp.com/api/v1/categories'
    );
  });

  it('can display the data in the results component when state in App is updated', () => {
    const component = mount(<App />);
    expect(component.find('pre')).toHaveLength(0);

    const mockedState = {
      headers: 'content-type: application/json; charset=utf-8,',
      count: 3,
      results: [
        {
          _id: '5e8ebff5898ba40017cf7e6f',
          name: 'mythical_weapons',
          display_name: 'Mythical Weapons',
          description: 'I shall smite thee!',
          __v: 0,
        },
        {
          _id: '5e8ec07a898ba40017cf7e70',
          name: 'health_house_baby',
          display_name: 'Health, Household, and Baby Care',
          description: 'Stuff fo yo crib!',
          __v: 0,
        },
        {
          _id: '5e8ec3e2fc07b80017d9856d',
          name: 'electronics',
          display_name: 'Electronics',
          description: 'Beep boop bzzt!',
          __v: 0,
        },
      ],
      url: 'https://cf-js-401-api-server.herokuapp.com/api/v1/categories',
      reqType: 'GET',
    };

    mockedState.output = {
      headers: mockedState.headers,
      count: mockedState.count,
      results: mockedState.results,
      url: mockedState.url,
      reqType: mockedState.reqType,
    };

    component.setState(mockedState);
    expect(component.find('pre')).toHaveLength(1);
    expect(component.find('pre').html()).toBeDefined();
  });

  it('can change reqType state on click', () => {
    const component = mount(<App />, { attachTo: document.body });
    const selectedBtn = component.find('button.selected-btn');
    const getBtn = component.find('button#get-btn');
    const postBtn = component.find('button#post-btn');
    expect(selectedBtn).toMatchObject(getBtn);

    const mockPostObj = {
      target: {
        classList: {
          add: (input) => {
            mockPostObj.class = input;
          },
        },
        value: 'POST',
      },
    };

    postBtn.simulate('click', mockPostObj);
    expect(component.find('button.selected-btn')).not.toMatchObject(getBtn);
    expect(mockPostObj.class).toBe('selected-btn');
    expect(component.state('reqType')).toBe('POST');
  });
});
