import React from 'react'
import styled from 'styled-components'

const CupDiv = styled.div`
height: 100px;
border: 1px solid black;
width: 100px;
display: flex;
position: relative;

`;

const Drink = styled.button`
margin-top: 50%;
margin-left: 50%;
transform: translate(-50%, -20%);
border: 1px solid black;
height: fit-content;
padding: 2px;

`

const Coffee = CupDiv.extend`
  background-color: black;
    height: 20px;
    bottom: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
`


const Cup = ({index, game})=>(
<CupDiv key={index}>
<Coffee>
</Coffee>
{game && <Drink>Drink</Drink>}
</CupDiv>
)

export default Cup
