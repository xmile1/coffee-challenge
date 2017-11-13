import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Cup from './Cup.jsx';

test('renders <Cup/> Component', t => {
  let wrapper = shallow(<Cup/>)
  t.is(wrapper.find('#cupDiv').length, 1);
});


test('renders the drink button when game is true', t => {
  let wrapper = shallow(<Cup game={true} />)
  t.is(wrapper.find('#drink').length, 1);
});
