import React from 'react';
import styled from 'styled-components'

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
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  )
}

export default Score;
