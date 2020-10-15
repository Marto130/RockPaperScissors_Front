import React, {useContext} from 'react';
import styled from 'styled-components'
import {ScoreContext} from '../App.js'

const ScoreStyled = styled.div `
  background: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  width: 80px;
  height: 70px;

  small {
    color: #2A45C2;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  p {
    color: #565468;
    font-size: 35px;
    margin: 0.1em 0 0 0;
    font-weight: 700;

  }
`

function Score() {
  const {score}= useContext(ScoreContext)
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  )
}

export default Score;
