import React from 'react'
import HighScore from './HighScore'
import styled from 'styled-components'
import CupContainer from '../Container/CupContainer'

const Pause = styled.button`

`

const Wrapper = styled.div`
display: flex
`

const Game = ({totalDrunk, numberOfCups, handlePause, coffeeQuantity})=>(
  <div>
    <HighScore/>
    <Wrapper>
    <div>Total Drunk ml: {totalDrunk}</div>
    <Pause onClick={handlePause}>Take a break / Restart</Pause>
    </Wrapper>
    <Wrapper>
    {Array.apply(null, Array(numberOfCups)).fill(0).map((e,i)=>{
      return (<CupContainer index={i} game={true} coffeeQuantity={coffeeQuantity}/>)
    })}
    </Wrapper>
  </div>
)

export default Game
