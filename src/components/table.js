import React, {useState, useContext} from 'react';
import {ScoreContext} from '../App.js'
import Token from './token.js'
import EmptyToken from './emptyToken.js';
import {WhiteButton} from './button.js';
import {results} from '../functions.js'
import styled from 'styled-components'

const TableStyled= styled.div `;

display: grid;
grid-template-columns: 110px 110px;
justify-content: center;
justify-items: center;
grid-gap: 20px 70px;
margin: 2 em 0;
position: relative;

P {
  font-size: 12px;
  letter-spacing: 1px;
}

& div:nth-of-type(3) {
  grid-column: span 2;
}

.line {
  height: 10px;
  background: rgba(0,0,0,.2);
  position: absolute;
  width: 190px;

  margin: 60px;

  &:before {
    content: '';
    height: 10px;
    background: rgba(0,0,0,.2);
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
    background: rgba(0,0,0,.2);
    position: absolute;
    left: 0;
    right:0;
    top:0;
    transform: rotate(-60deg);
    transform-origin: right;
  }
}

.results {
  text-align: center;

  h2 {
    text-transform: uppercase;
    font-size: 56px;
    margin: 10px;
  }


}
@media screen and (min-width: 768px) {
grid-gap: 50px 250px;
${({playing}) => playing && 'grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 40px 50px;'}

  & div:nth-of-type(1) {
     ${({playing}) => playing && `grid-column: 1/span 1;

                                  `}
  }

  & div:nth-of-type(2) {
    ${({playing}) => playing && `grid-column: 4/span 1;

                                `}
  }

  & div:nth-of-type(3) {
     ${({playing}) => (playing) && `grid-column: 2/span 2;
                                                      grid-row: 2/1;

                                                      `}
  }


  .line {
    width: 460px;
    height: 20px;
    margin: 90px;

    &:before {
      height: 20px;
    }
    &:after {
      height: 20px;
    }
  }

  p {

      width: 10em;
      font-size: 1.2em;
      text-align: center;

      padding: 0;
      position: relative;
      bottom: 370px;


  }

  & p:nth-of-type(2) {
    left: 23em;
  }



}
`

const elements= [
  'paper',
  'scissors',
  'rock'
]

function Table() {

const [playing, setPlaying]= useState(false);
const [pick, setPick]= useState('');
const [player2Pick, setPlayer2Pick]= useState('');
const [result, setResult]= useState('')
const {score, setScore} = useContext(ScoreContext);


  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function launchPlayer2Pick() {
    return new Promise((resolve, reject) => {
      let pick2;
      const interval = setInterval(() => {
        pick2 = elements[getRandom(0, 3)];
        setPlayer2Pick(pick2)
      }, 80)

      setTimeout(() => {
        clearInterval(interval);
        resolve(pick2);
      }, 2000)

    })
  }


  async function onClick(name) {
      // setResult('');
      setPlaying(true)
      setPick(name)

      const p2=  await launchPlayer2Pick();
      const res= results(name, await p2);

      setResult(res)

       if (res==='you win!') {
        setScore(score + 1)
      }
    }


  function handleTryAgainClick() {
    setResult('')
    setPlaying(false);

  }

//------------------------------------------------------------------------------
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
              <Token name={pick} lightButtonEffect={(result === 'you win!')}/>
              {
                (!player2Pick) ? <EmptyToken/> :
                                <>
                                <Token name={player2Pick} lightButtonEffect={(result === 'you lose!')}/>
                                <p>YOU PICKED</p>
                                </>
              }
              {
                (result) &&
                            <>
                              <p>PLAYER 2 PICKED</p>
                              <div className="results">
                                <h2>{result}</h2>
                                <WhiteButton onClick={handleTryAgainClick}>
                                TRY AGAIN
                                </WhiteButton>
                                </div>
                                </>
                              }

                            </>
          )
    }
    </TableStyled>
  )
}





  export default Table;
