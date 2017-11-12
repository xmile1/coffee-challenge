import React, {Component} from 'react';
import { connect } from 'react-redux';
import Home from '../Presentation/Home';
import {setCups} from 'actions';
import {Link} from 'react-router-dom';

class HomeContainer extends Component{

setCups = (value)=>{
  this.props.setCups(value)
}


  render(){
    const {numberOfCups} = this.props
    return(
      <div>
        <Home numberOfCups={numberOfCups} setCups={this.setCups} startGame={this.startGame}  />
        <Link to="/req">Visit Request Page</Link>
      </div>
    )
  }
}

const mapState = (state)=>{
  return{numberOfCups: state.noOfCups}
}

const mapDispatch= {setCups}

export default connect(mapState, mapDispatch)(HomeContainer);
