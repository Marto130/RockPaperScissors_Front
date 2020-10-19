import React from 'react';
import styled from 'styled-components'

const WrapperStyled= styled.div`
  max-width: 700px;
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: 1000px;
    margin: auto;
  }
`


function Wrapper({children}) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper;
