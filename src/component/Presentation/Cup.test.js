import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Cup from './Cup.jsx';

test('renders <Cup/> Component', t => {
  let wrapper = shallow(<Cup/>)
  t.is(wrapper.find('.cas').length, 1);
});
