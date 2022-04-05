import React from 'react';
import { shallow } from 'enzyme';
import Display from '../components/Display';

describe('Display', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
