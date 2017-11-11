import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cup from '../Presentation/Cup';
import {setCurrentCoffee} from 'actions'

class CupContainer extends Component{

  constructor(props){
   super(props)
   this.state = {
     coffeeQuantity: 0
   }
  }

componentWillReceiveProps(nextProps){

  if (nextProps.coffeeQuantity !== this.props.coffeeQuantity){
  let coffeeQuantity = this.state.coffeeQuantity + nextProps.coffeeQuantity
  this.setState({
    coffeeQuantity
  })
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
  return{numberOfCups: state.noOfCups, currentQuantity: (index)=>state.currentQuantity[index]}
}

const mapDispatch = {setCurrentCoffee}

export default connect(mapState, mapDispatch)(CupContainer);
