import React from 'react';
import { render } from 'enzyme';
import Footer from '../components/Footer';

describe('footer component', () => {
  it('displays the proper html and text', () => {
    const component = render(<Footer />);
    const pTag = component.find('p');
    const gitHubSvg = component.find('svg.fa-github');
    const linkedInSvg = component.find('svg.fa-linkedin');

    expect(pTag).toBeDefined();
    expect(gitHubSvg).toBeDefined();
    expect(linkedInSvg).toBeDefined();

    expect(pTag.text()).toBe('Created by Earl Jay Caoile');
    expect(gitHubSvg.html()).toBeDefined();
    expect(linkedInSvg.html()).toBeDefined();
  });
});
