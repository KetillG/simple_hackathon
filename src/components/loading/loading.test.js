import React from 'react';
import { shallow } from 'enzyme';
import Loading from './loading';

describe('<Loading />', () => {
  test('renders', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
