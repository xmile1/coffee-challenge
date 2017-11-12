import React, {Component} from 'react';
import { connect } from 'react-redux';
import GameState from '../Presentation/GameState';

class GameStateContainer extends Component{

  render(){
    return(
    <GameState {...this.props} />
    )
  }
}

const mapState = (state)=>{
  return {gameState : state.status}
}

export default connect(mapState)(GameStateContainer);
