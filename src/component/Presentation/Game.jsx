import React from 'react'
import HighScore from '../Container/HighScoreContainer'
import styled from 'styled-components'
import CupContainer from '../Container/CupContainer'
import GameStateContainer from '../Container/GameStateContainer'
import { Div, CupWrapper, MaterialButton } from 'style/reuse'

const Pause = MaterialButton.extend`
  padding: 10px 12px;
  margin: unset;
`

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: ${props => props.marginTop};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  width: 40%;
`




const Game = ({ score, numberOfCups, handlePause, coffeeQuantity, gameState }) => (
  <Div id="game">
    <HighScore />
    <Wrapper>
      <div id="total-drunk">Total Drunk ml: {score}</div>
      <Pause id="pause" onClick={handlePause}>Take a break / Restart</Pause>
    </Wrapper>
    <CupWrapper>
      {Array.apply(null, Array(numberOfCups)).fill(0).map((e, i) => {
        return (<CupContainer key={i} index={i} game={true} coffeeQuantity={coffeeQuantity} />)
      })}
    </CupWrapper>
    <Wrapper marginTop={"20px"} justify={"center"}>
      <GameStateContainer id="game-state" />
    </Wrapper>
  </Div>
)

export default Game
