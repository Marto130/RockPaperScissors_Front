import React, {useState} from 'react';
import styled from 'styled-components'

import imgRules from '../images/image-rules.svg'
import imgCloseBtn from '../images/icon-close.svg'

import {Button} from './button.js';

const RulesStyled= styled.div `
  text-align: center;
  margin-bottom: .5em;


  .close-btn {

    margin-top: 4em;

  }

  .rules-overlay {
    background: white;
    padding: 5em 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom:0;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2{
      color: rgba(0, 0, 0, .8);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 2em;
      margin-top: -2em;

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
          <div className= "rules-overlay">
            <h2>Rules</h2>
            <img src={imgRules} alt="game rules"/>
            <img  src={imgCloseBtn} className="close-btn" onClick={handleToggleClick} alt="close button"/>
          </div>
        )
      }

      <Button onClick={handleToggleClick}>
      RULES
      </Button>
    </RulesStyled>
  )
}


export default Rules;
