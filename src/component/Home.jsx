import React, {Component} from 'react';
import { connect } from 'react-redux';
import HighScore from './HighScore';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      Test
        <HighScore />
      </div>
    )
  }
}

export default connect()(Home);
