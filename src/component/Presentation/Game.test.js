import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './Game.jsx';
import {spy} from 'sinon'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


test('renders <Game/> Component', t => {
  let wrapper = shallow(<Game/>)
  t.is(wrapper.find('#game').length, 1);
});


test('renders the Game component', t => {
  let wrapper = shallow(<Game game={true} />)
  t.is(wrapper.find('#game').length, 1);
});

test('Displays the totla Drunk ml', t => {
  let wrapper = shallow(<Game totalDrunk={10} />)
  t.is(wrapper.find('#total-drunk').text(), 'Total Drunk ml: 10');
});


test("should call handlePause on click of 'take a break'", t => {
let GameMethods = {
  handlePause: spy()
}
  let wrapper = shallow(<Game handlePause={GameMethods.handlePause} />)
  wrapper.find("#pause").simulate('click')
  t.true(GameMethods.handlePause.called);
});

test('Displays cups on game start', t => {
  let store = createStore(()=>({HighScore:'value', currentQuantity:{}}))
  let wrapper = mount(<Provider store={store}><Game numberOfCups={4} /></Provider>)
  t.true(wrapper.find("#cup-div").length > 0);
});
