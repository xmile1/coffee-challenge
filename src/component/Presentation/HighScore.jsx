import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #757575;
`

const HighScore = ({ score, cups }) => (
  <Div id="high-score">
    Highscore: {score}ml with {cups}cups
  </Div>
)

export default HighScore
