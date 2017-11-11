import React, {Component} from 'react';
import { connect } from 'react-redux';
import Home from '../Presentation/Home';
import {setCups} from 'actions';

class HomeContainer extends Component{

setCups = (value)=>{
  this.props.setCups(value)
}


  render(){
    const {numberOfCups} = this.props
    return(
    <Home numberOfCups={numberOfCups} setCups={this.setCups} startGame={this.startGame}  />
    )
  }
}

const mapState = (state)=>{
  return{numberOfCups: state.noOfCups}
}

const mapDispatch= {setCups}

export default connect(mapState, mapDispatch)(HomeContainer);
