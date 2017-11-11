import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store'
import Routes from 'Routes.jsx'
import {Provider} from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
