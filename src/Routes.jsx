import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './component/Container/HomeContainer';
import Game from './component/Container/GameContainer'
import Request from './component/Container/RequestHandlerContainer'
import { createBrowserHistory } from 'history'

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
        <Route path="/req" component={Request}/>
     </Switch>
    </Router>
  )
};

const mapState = ({tasks}) => ({tasks});

export default connect(mapState)(Routes);
