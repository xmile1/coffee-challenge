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
  this.setState({
    quantity: this.props.quantity
  })
}

handlePause = ()=>{
  if (this.props.gameState === 'Game Paused') {
  let intervalId = setInterval(this.addCoffee, 3000);
  return this.props.setGameStatus('resumegame', intervalId)
}
  clearInterval(this.props.intervalId)
  this.props.setGameStatus('pausegame')
}

// this was gotten from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomInt = (min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

render(){
    let {numberOfCups, quantity, gameState, score} = this.props
    return(
    <Game numberOfCups={numberOfCups} coffeeQuantity={quantity} gameState={gameState} score={score} handlePause={this.handlePause}/>
    )
  }
}


const mapState = (state)=>{
  return{ numberOfCups: state.noOfCups,
    quantity: state.quantity,
    gameState: state.status,
    score: state.score,
    intervalId: state.intervalId,
  }
}

const mapDispatch= {addCoffee, setGameStatus}

export default connect(mapState, mapDispatch)(GameContainer);
