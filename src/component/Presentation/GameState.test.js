import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import GameState from './GameState.jsx';


test('renders <GameState/> Component', t => {
  let wrapper = shallow(<GameState/>)
  t.is(wrapper.find('#game-state').length, 1);
});

test('Displays the game state', t => {
  let wrapper = shallow(<GameState gameState={'Game Started'} />)
  t.is(wrapper.find('#game-state').text(), 'Game Started');
});
