import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './component/Container/HomeContainer';
import { createBrowserHistory } from 'history'

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
       <Switch>
        <Route exact path="/" component={Home}/>
     </Switch>
    </Router>
  )
};

const mapState = ({tasks}) => ({tasks});

export default connect(mapState)(Routes);
