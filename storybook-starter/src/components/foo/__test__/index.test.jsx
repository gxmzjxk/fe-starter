import React from 'react';
import { mount } from '@jupiter-cli/guardian/enzyme';
import { Foo } from '..';

describe('Item', () => {
  it('should have contents', () => {
    const wrapper = mount(<Foo />);
    expect(wrapper.contains('Foo-new')).toBeTruthy();
  });
});
