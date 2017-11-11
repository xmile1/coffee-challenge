import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cup from '../Presentation/Cup';
import {setCurrentCoffee, setGameStatus} from 'actions'

class CupContainer extends Component{

  constructor(props){
   super(props)
   this.state = {
     coffeeQuantity: 0
   }
  }

componentWillReceiveProps(nextProps){
  if (nextProps.coffeeQuantity !== this.props.coffeeQuantity){
    let currentQuantity = this.props.currentQuantity(nextProps.index)
  let coffeeQuantity = parseInt(currentQuantity, 10) ?  currentQuantity + nextProps.coffeeQuantity :  nextProps.coffeeQuantity

  if (coffeeQuantity >= 100) {
    clearInterval(this.props.intervalId)
    return this.props.setGameStatus('gameover');

  }
  this.setState({
    coffeeQuantity
  })
  console.log(coffeeQuantity, "coffeeQuantity");
  this.props.setCurrentCoffee(coffeeQuantity, this.props.index )
}
}

  render(){
    let props = Object.assign({}, ...this.props, {coffeeQuantity: this.props.currentQuantity(this.props.index)})
    return(
    <Cup {...props} />
    )
  }
}

const mapState = (state)=>{
  return{numberOfCups: state.noOfCups, currentQuantity: (index)=>state.currentQuantity[index], intervalId: state.intervalId}
}

const mapDispatch = {setCurrentCoffee, setGameStatus}

export default connect(mapState, mapDispatch)(CupContainer);
