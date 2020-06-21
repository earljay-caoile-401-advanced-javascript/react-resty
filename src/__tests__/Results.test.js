import React from 'react';
import { render, mount } from 'enzyme';
import Results from '../components/results/Results';

describe('results component', () => {
  it('is empty by default', () => {
    const component = render(<Results output={null} />);
    expect(component.html()).toBeFalsy();
  });

  it('can populate html with output props', () => {
    const outputData = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
      results: [
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
        {
          _id: '5eebefe19bab0a0017f78b2c',
          name: 'dat_test_cat',
          display_name: 'Test Cat on React App',
          description: 'Does this crap even work with POST?!',
          __v: 0,
        },
      ],
      count: 3,
      url: 'https://cf-js-401-api-server.herokuapp.com/api/v1/categories',
      reqType: 'GET',
    };

    const component = mount(<Results output={outputData} />);
    expect(component.html()).toBeTruthy();
  });
});
