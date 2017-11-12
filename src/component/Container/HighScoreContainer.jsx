import React, {Component} from 'react';
import { connect } from 'react-redux';
import HighScore from '../Presentation/HighScore';

class HighScoreContainer extends Component{

  render(){
    return(
    <HighScore {...this.props} />
    )
  }
}

const mapState = (state)=>{
  console.log(state.HighScore, "HighScore")
  return state.HighScore
}

export default connect(mapState)(HighScoreContainer);
