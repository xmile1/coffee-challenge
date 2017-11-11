import React from 'react';
import { connect } from 'react-redux';
import HighScore from './HighScore';
import Cup from './Cup'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Button = styled.button`

`

const Home = ({startGame, numberOfCups, setCups})=>(
  <div>
  Test
    <HighScore />
    {Array.apply(null, Array(numberOfCups)).map((e, i)=>{
      return (<Cup index={i}/>)
    })}
    <Slider min={0} max={10} step={1} onChange={setCups}/>
    <Link to="/Game">
    <Button onClick={startGame}> Start </Button>
    </Link>
  </div>
)


export default Home;
