import React, {Component} from 'react';
import { connect } from 'react-redux';
import Game from '../Presentation/Game'
import {addCoffee, setGameStatus} from 'actions'


class GameContainer extends Component{

constructor(props){
  super(props)
  this.state ={}
}

  componentDidMount=()=>{
      let intervalId = setInterval(this.addCoffee, 3000);
      this.props.setGameStatus('startgame', intervalId)
  }

addCoffee = ()=>{
  let quantity = this.getRandomInt(0,45)
  this.props.addCoffee(quantity)
  this.state = {
    quantity: this.props.quantity
  }
}

// this was gotten from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomInt = (min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  render(){
    let {numberOfCups, quantity} = this.props
    return(
    <Game numberOfCups={numberOfCups} coffeeQuantity={quantity}/>
    )
  }
}


const mapState = (state)=>{
  return{numberOfCups: state.noOfCups, quantity: state.quantity}
}

const mapDispatch= {addCoffee, setGameStatus}

export default connect(mapState, mapDispatch)(GameContainer);
