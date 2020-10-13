import React from 'react';
import styled from 'styled-components'


const EmptyTokenStyled= styled.div `
  width: 95px;
  height: 90px;
  background: rgba(65, 60, 64, .4);
  border: 18px solid rgba(162, 150, 160, 0.5) ;
  border-radius: 50%;
  box-shadow: 0 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;


.box {
     box-shadow: 0 -5px 0 rgba(65, 60, 64, .4);
     flex: 1;
     align-self: stretch;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
}

`


function EmptyToken() {

  return (
    <EmptyTokenStyled>
      <div class='box'>
      </div>
    </EmptyTokenStyled>
  )
}


export default EmptyToken;
