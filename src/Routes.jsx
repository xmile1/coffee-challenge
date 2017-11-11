import React from 'react';
import {Router, Route} from 'react-router';
import {connect} from 'react-redux';
import Home from 'component/Home';
import { createBrowserHistory } from 'history'

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Home}/>
    </Router>
  )
};

const mapState = ({tasks}) => ({tasks});

export default connect(mapState)(Routes);
