import React from 'react'
import styled from 'styled-components'

const CupDiv = styled.div`
height: 100px;
border: 1px solid black;
width: 100px;
display: flex

`;

const Drink = styled.div`
margin-top: 50%;
margin-left: 50%;
transform: translate(-50%, -20%);
border: 1px solid black;
height: fit-content;
padding: 2px;
`


const Cup = ({index, game})=>(
<CupDiv key={index}>
{game && <Drink>Drink</Drink>}
</CupDiv>
)

export default Cup
