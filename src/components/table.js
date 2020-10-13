import React, {useState} from 'react';
import styled from 'styled-components'
import Token from './token.js'
import EmptyToken from './emptyToken.js'

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
  const [playing, setState]= useState(false);
  const [pick, setPick]= useState('');

  function onClick(name) {
    setState(true)
    setPick(name)
  }

  return (
    <TableStyled playing={playing}>
    {
      !playing ? (
        <>
          <span className="line"></span>
          <Token name= "paper" onClick={onClick}/>
          <Token name= "scissors"  onClick={onClick}/>
          <Token name= "rock" onClick={onClick}/>
        </>
      ) : (<>
          <Token name={pick} onClick={onClick}/>
          <EmptyToken/>
          </>
        )
    }
    </TableStyled>
  )
}


export default Table;
