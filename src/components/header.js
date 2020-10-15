import React from 'react';
import styled from 'styled-components'

import Score from './score.js';

const HeaderStyled= styled.div `
  border: 3px solid rgba(255, 255, 255, .29);
  color: white;
  border-radius: 0.5em;
  padding: 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;


  h1 {
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
  }
`

function Header() {
  // const [score, setScore] = useState(0);

  return (
    <HeaderStyled>
      <h1>
        Rock <br/> Paper <br/> Scissors
      </h1>
      <Score/>
    </HeaderStyled>
  )
}


export default Header;
