import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import RequestHandlerContainer from './RequestHandlerContainer.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

test('Render the RequestHandlerContainer Componenet', t => {
  let store = createStore(()=>({api:{statusCode:200}}))
  let wrapper = mount(<Provider store={store}><RequestHandlerContainer numberOfCups={4} /></Provider>)
  t.is(wrapper.find("#req").length, 1);
});
