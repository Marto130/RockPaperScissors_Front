import React from 'react';
import styled from 'styled-components'

import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'


const TokenStyled= styled.div `
  width: 95px;
  height: 90px;
  background: white;
  border: 18px solid ${(props)=> props.color.base};
  border-radius: 50%;
  box-shadow: 0 5px 0 ${(props)=> props.color.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  &:active {
    transform: scale(.9);
  }

.box {
     box-shadow: 0 -5px 0 #BABFD4;
     flex: 1;
     align-self: stretch;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
}

`
const objImg= {rock: rock, scissors:scissors, paper: paper};

const color= {
  paper: {
    base: '#516ef4',
    border: '#2543c3'
  },

  rock: {
    base: '#de3a5a',
    border: '#980e31'
  },

  scissors: {
    base: '#eca81e',
    border: '#c76c14'
  },

}

function Token({name, onClick}) {
  function handleClick() {
    if(onClick){
      onClick(name);
    }
  }


  return (
    <TokenStyled color= {color[name]} onClick={handleClick}>
      <div class='box'>
        <img src= {objImg[name]} alt=""/>
      </div>

    </TokenStyled>
  )
}


export default Token;
