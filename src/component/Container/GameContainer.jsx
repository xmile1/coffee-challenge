import React, {Component} from 'react';
import { connect } from 'react-redux';
import Game from '../Presentation/Game'


class GameContainer extends Component{
  render(){
    return(
    <Game numberOfCups={this.props.numberOfCups}/>
    )
  }
}


const mapState = (state)=>{
  return{numberOfCups: state.noOfCups}
}

const mapDispatch= {}

export default connect(mapState, mapDispatch)(GameContainer);
