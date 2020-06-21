import React from 'react';
import { render } from 'enzyme';
import Form from '../components/form/Form';

describe('form component', () => {
  it('properly displays the html', () => {
    const component = render(<Form />);
    const selectedBtn = component.find('button.selected-btn');
    const getBtn = component.find('button#get-btn');
    const postBtn = component.find('button#post-btn');
    const putBtn = component.find('button#put-btn');
    const patchBtn = component.find('button#patch-btn');
    const deleteBtn = component.find('button#delete-btn');
    const inputBox = component.find('input.url-textbox');
    const submitBtn = component.find('button.submit-btn');

    expect(selectedBtn.text()).toBe('GET');
    expect(selectedBtn).toMatchObject(getBtn);
    expect(postBtn.text()).toBe('POST');
    expect(patchBtn.text()).toBe('PATCH');
    expect(putBtn.text()).toBe('PUT');
    expect(deleteBtn.text()).toBe('DELETE');
    expect(inputBox.text()).toBeFalsy();
    expect(submitBtn.text()).toBe('Submit');
  });
});
