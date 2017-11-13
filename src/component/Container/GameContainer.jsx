import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from '../Presentation/Game'
import { addCoffee, setGameStatus } from 'actions'


class GameContainer extends Component {

  componentDidMount = () => {
    this.startTime('startgame')
  }

  addCoffee = () => {
    // 50ml is 10% and 100ml is 40% of 250ml
    let quantity = this.getRandomInt(10, 40)
    this.props.addCoffee(quantity)
  }

startTime = (status) => {
  let time = this.getRandomInt(300, 3000)
  let intervalId = setInterval(this.addCoffee, time);
  this.props.setGameStatus(status, intervalId)
}


  handlePause = () => {
    if (this.props.gameState === 'Game Paused') {
        this.startTime('resumegame')
    }
    if (this.props.gameState === 'Game Over') {
      let intervalId = setInterval(this.addCoffee, 3000);
      return this.props.setGameStatus('startgame', intervalId)
    }
    clearInterval(this.props.intervalId)
    this.props.setGameStatus('pausegame')
  }

  // this was gotten from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    let { quantity } = this.props
    return (
      <Game {...this.props} coffeeQuantity={quantity} handlePause={this.handlePause} />
    )
  }
}


const mapState = (state) => {
  return {
    numberOfCups: state.noOfCups,
    quantity: state.quantity,
    gameState: state.status,
    score: state.score,
    intervalId: state.intervalId,
  }
}

const mapDispatch = { addCoffee, setGameStatus }

export default connect(mapState, mapDispatch)(GameContainer);
