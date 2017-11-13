import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import Cup from './Cup.jsx';

test('renders <Cup/> Component', t => {
  let wrapper = shallow(<Cup/>)
  t.is(wrapper.find('#cup-div').length, 1);
});


test('renders the drink button when game is true', t => {
  let wrapper = shallow(<Cup game={true} />)
  t.is(wrapper.find('#drink').length, 1);
});

test('Displays the Drink text when game is true', t => {
  let wrapper = mount(<Cup game={true} />)
  t.is(wrapper.find('#drink').first().text(), 'Drink');
});


test('does not renders the drink button when game is false', t => {
  let wrapper = shallow(<Cup game={false} />)
  t.is(wrapper.find('#drink').length, 0);
});

test('should render the coffee component', t => {
  let wrapper = shallow(<Cup coffeeQuantity={30} />)
  t.is(wrapper.find('#coffee').length, 1);
});
