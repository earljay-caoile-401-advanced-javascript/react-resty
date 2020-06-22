import React from 'react';
import { render, mount } from 'enzyme';
import History from '../components/history/History'

describe('history component', () => {
  it('initializes with the proper html', () => {
    const component = mount(<History history={[]}/>);
    expect(component.html()).toBeDefined();
    
    const histH2 = component.find('h2');
    expect(histH2.text()).toBe('Detailed API Fetch History');
    
    const histH3 = component.find('h3');
    console.log('h3 html:', histH3.children);
    // expect(histH3.text()).toBe('Please submit an API request to see the results here.');   
  });
});

