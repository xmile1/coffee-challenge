import React from 'react';
import HighScore from '../Container/HighScoreContainer';
import Cup from './Cup'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { CupWrapper, MaterialButton } from 'style/reuse'

const Button = MaterialButton.extend`
  padding: 10px 12px;
  margin: unset;
  width: 20%;
  cursor: pointer;
`

const DivWrapper = styled.div`
  display: flex;
  padding: 2% 30% 0 30%;
`

const Wrapper = styled.div`
  width:80%;
`
const LinkWrapper = styled(Link) `
  display: flex;
  justify-content: center;
  padding-top: 2%;
  text-decoration: none;
`



const Home = ({ startGame, numberOfCups, setCups }) => (
  <Wrapper>
    <HighScore />
    <CupWrapper name="cup-wrapper">
      {Array.apply(null, Array(numberOfCups)).map((e, i) => {
        return (<Cup key={i} index={i} />)
      })}
    </CupWrapper>
    <DivWrapper>
      <Slider value={numberOfCups} min={1} max={10} step={1} onChange={setCups} />
    </DivWrapper>

    <LinkWrapper to="/Game">
      <Button onClick={startGame}> Start </Button>
    </LinkWrapper>
  </Wrapper>
)


export default Home;
