import React from 'react';
import styled from 'styled-components'
import Token from './token.js'

const TableStyled= styled.div `

display: grid;
grid-template-columns: 110px 110px;
justify-content: center;
justify-items: center;
grid-gap: 20px 70px;
margin: 2 em 0;
position: relative;

& div:nth-of-type(3) {
  grid-column: span 2;
}

.line {
  height: 10px;
  background: rgba(0,0,0,.3);
  position: absolute;
  left: 5px;
  right: 5px;
  top: 8px;
  margin: 60px;

  &:before {
    content: '';
    height: 10px;
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 0px;
    right: 0px;
    top:0px;
    transform: rotate(60deg);
    transform-origin: left;

  }

  &:after {
    content: '';
    height: 10px;
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 0;
    right:0;
    top:0;
    transform: rotate(-60deg);
    transform-origin: right;
  }
}

`

function Table() {
  return (
    <TableStyled>
      <span className="line"></span>
      <Token name= "paper"/>
      <Token name= "scissors"/>
      <Token name= "rock"/>
    </TableStyled>
  )
}


export default Table;
