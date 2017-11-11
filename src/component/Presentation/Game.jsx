import React from 'react'
import HighScore from './HighScore'
import styled from 'styled-components'
import Cup from './Cup'

const Pause = styled.button`

`

const Wrapper = styled.div`
display: flex
`

const Game = ({totalDrunk, numberOfCups, handlePause, addCoffee})=>(
  <div>
    <HighScore/>
    <Wrapper>
    <div>Total Drunk ml: {totalDrunk}</div>
    <Pause onClick={handlePause}>Take a break / Restart</Pause>
    </Wrapper>
    <Wrapper>
    {Array.apply(null, Array(numberOfCups)).map((e)=>{
      return (<Cup index={e} game={true} addCoffee={addCoffee}/>)
    })}
    </Wrapper>
  </div>
)

export default Game
