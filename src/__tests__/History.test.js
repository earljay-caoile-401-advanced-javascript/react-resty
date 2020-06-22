import React from 'react';
import { render, mount } from 'enzyme';
import History from '../components/history/History';

describe('history component', () => {
  const productFetch = {
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    results: [
      {
        _id: '5ef028093e7bc80017b74baa',
        category: 'mythical_weapons',
        name: 'mjolnir',
        display_name: 'Mjolnir',
        description:
          "Thor's hammer. It can only be wielded by those who are worthy!",
        __v: 0,
      },
      {
        _id: '5ef028193e7bc80017b74bab',
        category: 'mythical_weapons',
        name: 'gungnir',
        display_name: 'Gungnir',
        description: "Odin's spear. It supposedly doesn't miss...",
        __v: 0,
      },
      {
        _id: '5ef028363e7bc80017b74bac',
        category: 'health_house_baby',
        name: 'adhesive_medical_strips',
        display_name: 'Adhesive Medical Strips',
        description:
          "We can't use band-aid since that's a copyrighted compoany name, but that's pretty much what it is...",
        __v: 0,
      },
      {
        _id: '5ef0285a3e7bc80017b74bad',
        category: 'electronics',
        name: 'amd_ryzen_9_3950x',
        display_name: 'AMD Ryzen 9 3950X',
        description: '16 cores, 32 threads, dank level over 9000!',
        __v: 0,
      },
      {
        _id: '5ef028673e7bc80017b74bae',
        category: 'electronics',
        name: 'intel_core_i9_9900k',
        display_name: 'Intel Core i9-9900k',
        description: "That's a funny way to spell 'Shintel'!",
        __v: 0,
      },
      {
        _id: '5ef0287f3e7bc80017b74baf',
        category: 'electronics',
        name: 'sennheiser_hd_650',
        display_name: 'Sennheiser HD 650',
        description: 'open cans for dat muzak',
        __v: 0,
      },
    ],
    count: 6,
    url: 'https://cf-js-401-api-server.herokuapp.com/api/v1/products',
    reqType: 'GET',
  };

  it('initializes with the proper html', () => {
    const component = mount(<History history={[]} />);
    expect(component.html()).toBeDefined();

    const histH2 = component.find('h2');
    expect(histH2.text()).toBe('Detailed API Fetch History');

    const histH3s = component.find('h3');
    expect(histH3s).toHaveLength(2);

    const miniHist = component.find('.mini-history');
    const miniHistH3 = miniHist.find('h3');
    expect(miniHistH3.text()).toBe('Previous Requests');

    const miniHistList = miniHist.find('ul');
    expect(miniHistList).toBeDefined();

    const miniHistBtn = miniHist.find('button');
    expect(miniHistBtn.text()).toBe('Re-Fetch');
  });

  it('can change props on click', () => {
    const component = mount(<History history={[]} />);
    const histH2 = component.find('h2');
    const histH3s = component.find('h3');
    const miniHist = component.find('.mini-history');
    const miniHistH3 = miniHist.find('h3');
    const miniHistList = miniHist.find('ul');
    const miniHistBtn = miniHist.find('button');
  });
});
