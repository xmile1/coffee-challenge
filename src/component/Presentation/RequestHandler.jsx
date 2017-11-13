import React from 'react'
import styled from 'styled-components';
import { MaterialButton } from 'style/reuse'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
`

const Button = MaterialButton.extend`
    padding: 20px 30px;
`

const RequestHandler = ({ statusCode, handleClick, resStatus }) => (
  <Div>
    <Button onClick={handleClick}>
      Click to Request ({statusCode || 200})
    </Button>
    <div>
      You Got {resStatus}
    </div>

  </Div>
)

export default RequestHandler
