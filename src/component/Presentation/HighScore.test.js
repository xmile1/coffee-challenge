import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import HighScore from './HighScore.jsx';


test('renders <HighScore/> Component', t => {
  let wrapper = shallow(<HighScore score={20000} cups={4}/>)
  t.is(wrapper.find('#high-score').length, 1);
});

test('Displays the game highscore', t => {
  let wrapper = mount(<HighScore score={20000} cups={4} />)
  t.is(wrapper.find('#high-score').first().text(), 'Highscore: 20000ml with 4cups');
});
