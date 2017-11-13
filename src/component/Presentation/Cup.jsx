import React from 'react'
import styled from 'styled-components'
import { MaterialButton } from 'style/reuse'

const CupDiv = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  position: relative;
  margin-right: 10px;
  border-style: none solid solid solid;
  border-width: 10px;
  border-color: #388E3C;
  border-radius: 10px;
`;

const Coffee = CupDiv.extend`
  background-color: #C8E6C9;
    height: ${({ coffeeQuantity }) => coffeeQuantity ? `${coffeeQuantity}%` : '0%'};
    bottom: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-style: none;
    border-radius: unset;
    transition: all 0.5s ease-out;
`

const GreenButton = MaterialButton.extend`
padding: 4px 13px;
    background-color: #388E3C;
    height: 25px;
    &:hover {
     background-color: #FF5252;
   }
   &:disabled{
     background-color: #BDBDBD;
     cursor:unset;
   }
`


const Cup = ({ index, game, coffeeQuantity, drink, disableButton }) => (
  <CupDiv key={index}>
    <Coffee coffeeQuantity={coffeeQuantity}></Coffee>
    {game && <GreenButton
      disabled={disableButton}
      onClick={drink}>
      Drink
    </GreenButton>}
  </CupDiv>
)

export default Cup
