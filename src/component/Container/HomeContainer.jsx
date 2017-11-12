import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../Presentation/Home';
import { setCups } from 'actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Div } from 'style/reuse'


const Footer = styled.div`
  margin-top: 20px

`

const Header = styled.div`
  padding-bottom: 20px;
`

const Info = styled.section`
  padding-bottom: 20px;
  width: 30%;
  text-align: center;
`

class HomeContainer extends Component {

  setCups = (value) => {
    this.props.setCups(value)
  }


  render() {
    const { numberOfCups } = this.props
    return (
      <Div>
        <Header> Classic Coffee Challenge</Header>
        <Info>
          Select the number of cups for your next game, more cups is more difficult
        </Info>
        <Home numberOfCups={numberOfCups} setCups={this.setCups} startGame={this.startGame} />
        <Footer>
          <Link to="/req">Visit Request Page</Link>
        </Footer>
      </Div>
    )
  }
}

const mapState = (state) => {
  return { numberOfCups: state.noOfCups }
}

const mapDispatch = { setCups }

export default connect(mapState, mapDispatch)(HomeContainer);
