import React from 'react'
import styled from 'styled-components';

const Div = styled.div`

`

const Button = styled.button`

`

const RequestHandler = ({statusCode, handleClick, resStatus}) =>(
  <Div>
    <Button onClick={handleClick}>
      Request {statusCode || 200}
    </Button>
    <Div>
      {resStatus}
    </Div>

  </Div>
)

export default RequestHandler
