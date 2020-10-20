import React from 'react';
import styled, {keyframes} from 'styled-components'

import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'

const buttonAnimation= keyframes`
  to {
    box-shadow: 0 0 0 30px rgba(255,255, 255, 0.04), 0 0 0 60px rgba(255,255, 255, .03), 0 0 0 90px rgba(255,255, 255, .02);
    transform: rotateY(365deg) scale(1.2);
  }
`

const boxAnimation= keyframes`
  to {
    transform: rotateZ(360deg) scale(1.1);
  }
`

const TokenStyled= styled.div `
  width: 80px;
  height: 75px;
  background: white;
  border: 18px solid ${(props)=> props.color.base};
  border-radius: 50%;
  box-shadow: 0 5px 0 ${(props)=> props.color.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  animation: 1.5s ${(props)=> props.lightButtonEffect ? buttonAnimation : ''} forwards;

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

     img{
       animation: 1s ${({lightButtonEffect})=> lightButtonEffect ? boxAnimation : ''} forwards;
     }
}

@media screen and (min-width: 768px){
  width: 175px;
  height: 170px;
  border: 30px solid ${(props)=> props.color.base};

  .box {
    box-shadow: 0 -10px 0 #BABFD4;
    box-shadow: 0 -10px 0 #BABFD4;
  img {
    width: 6em;
  }
  }
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

function Token({name, onClick, lightButtonEffect= false }) {

  function handleClick() {
    if(onClick){
      onClick(name);

    }

  }

  return (
    <TokenStyled color= {color[name]} onClick={handleClick} lightButtonEffect={lightButtonEffect} >
      <div className='box'>
        <img src= {objImg[name]} alt=""/>
      </div>

    </TokenStyled>
  )
}


export default Token;
