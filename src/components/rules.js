import React, {useState} from 'react';
import styled from 'styled-components'

import imgRules from '../images/image-rules.svg'
import imgCloseBtn from '../images/icon-close.svg'

import {Button} from './button.js';

const RulesStyled= styled.div `
  text-align: center;
  margin-bottom: .5em;

  &::before {
    content: '';
      display: ${({visible})=> (visible) ? "block" : "none" };
      z-index: 1;
      position: absolute;
      left:0;
      right:0;
      bottom:0;
      top:0;

      background: rgba(0,0,0, .7)
  }

  .close-btn {
    margin-top: 4em;
    cursor: pointer;
  }


  .rules-modal {
    background: white;
    padding: 5em 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    left: 0;
    right: 0;
    bottom:0;
    top: 0;
    z-index: 2;

    h2{
      color: rgba(0, 0, 0, .8);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 2em;
      margin-top: -2em;

    }

  }

  @media screen and (min-width: 1024px) {

    .buttonRules {
      position: fixed;
      right: 2.5em;
      bottom: 2.5em;

    }

    .rules-modal {
    box-sizing: border-box;
    width: 500px;
    height: 500px;
    margin: auto;
    padding: 5em 0 2em 0 ;
    border-radius: 10px;
    top: 0;
    bottom: initial;
    transform: translateY(50%);

      h2 {
        position: absolute;
        font-size: 2em;
        top: 2.5em;
        left: 1em;
        margin-bottom: em;
      }
    }

    .close-btn {
      position: absolute;
      right: 1.7em;
      top: -2.4em;
    }

  }



`

function Rules() {
  const [visible, setVisible]= useState(false);

    function handleToggleClick() {

      setVisible(!visible)

  }

  return (
    <RulesStyled>
      {
      (visible) && (
          <div className= "rules-modal">
            <h2>Rules</h2>
            <img src={imgRules} alt="game rules"/>
            <img  src={imgCloseBtn} className="close-btn" onClick={handleToggleClick} alt="close button"/>
          </div>
        )
      }

      <Button onClick={handleToggleClick} className="buttonRules">
      RULES
      </Button>
    </RulesStyled>
  )
}


export default Rules;
