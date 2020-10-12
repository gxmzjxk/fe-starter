import React from 'react';
import { mount } from '@jupiter-cli/guardian/enzyme';
import { Bar } from '.';

describe('Item', () => {
  it('should have contents', () => {
    const wrapper = mount(<Bar />);
    expect(wrapper.contains('Bar-new')).toBeTruthy();
  });
});
