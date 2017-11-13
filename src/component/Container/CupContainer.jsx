import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cup from '../Presentation/Cup';
import { setCurrentCoffee, setGameStatus, updateScore } from 'actions'

class CupContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.coffeeQuantity !== this.props.coffeeQuantity) {
      let currentQuantity = this.props.currentQuantity(nextProps.index)
      let coffeeQuantity = parseInt(currentQuantity, 10) ?
        currentQuantity + nextProps.coffeeQuantity : nextProps.coffeeQuantity

      if (coffeeQuantity >= 100) {
        let {score, numberOfCups, currentHighScore} = this.props
        clearInterval(this.props.intervalId)
        coffeeQuantity = 100
        this.props.setGameStatus('gameover', null, score, numberOfCups, currentHighScore);
      }
      this.props.setCurrentCoffee(coffeeQuantity, this.props.index)
    }
  }

  drink = () => {
    let quantity = this.props.currentQuantity(this.props.index)
    this.props.setCurrentCoffee(0, this.props.index)
    this.props.updateScore(this.props.score, quantity)
  }

  render() {
    let props = {
      ...this.props,
      coffeeQuantity: this.props.currentQuantity(this.props.index),
      drink: this.drink,
      disableButton: this.props.gameStatus !== 'Game Started'
    }
    return (
      <Cup {...props} />
    )
  }
}

const mapState = (state) => {
  return {
    numberOfCups: state.noOfCups,
    currentQuantity: (index) => state.currentQuantity[index],
    intervalId: state.intervalId,
    score: state.score,
    currentHighScore: state.HighScore.score,
    gameStatus: state.status
  }
}

const mapDispatch = { setCurrentCoffee, setGameStatus, updateScore }

export default connect(mapState, mapDispatch)(CupContainer);
