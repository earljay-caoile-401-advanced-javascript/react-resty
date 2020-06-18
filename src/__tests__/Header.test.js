import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('header component', () => {
  it('displays the proper html and text', () => {
    const component = mount(<App />);
    const headerComponent = component.find('header');
    const h1Tag = headerComponent.find('h1');
    const navTag = headerComponent.find('nav.top-navbar');
    const navList = navTag.find('ul');

    expect(headerComponent).toBeDefined();
    expect(h1Tag).toBeDefined();
    expect(navTag).toBeDefined();
    expect(navList).toBeDefined();

    expect(h1Tag.text()).toBe('RESTy');
    expect(navList.find('li')).toHaveLength(2);
    expect(navList.text().includes('Home')).toBe(true);
    expect(navList.text().includes('History')).toBe(true);
  });
});
