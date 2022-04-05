import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../components/Calculator';
import Display from '../components/Display';
import Keypad from '../components/Keypad';

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render <Display />', () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });

  it('should render <Keypad />', () => {
    expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
  });
});
