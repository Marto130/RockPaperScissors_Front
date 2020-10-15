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

.results {
  text-align: center;
  text-transform: uppercase;

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
  return new Promise((resolve, reject)=>{
    let pick2;
  const interval= setInterval(()=>{
                  pick2 = elements[getRandom(0, 3)];
                  const p2= setPlayer2Pick(pick2)
  }, 80)

  setTimeout(()=>{
              clearInterval(interval);
              resolve(pick2);
  }, 2000)

})

}


async function onClick(name) {
    setResult('');
    setPlaying(true)
    setPick(name)

    const p2=  await launchPlayer2Pick();
    const res= results(name, await p2);

    setResult(res)
    console.log(res);
    if (res==='you win!') {

      setScore(score + 1)
    }
  }



  function handleTryAgainClick() {
    setPlaying(false);
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
              <Token name={pick}/>
              {
                !player2Pick ? <EmptyToken/> :
                  <Token name={player2Pick}/>    }

              <p>YOU PICKED</p>
              <p>PLAYER 2 PICKED</p>

              <div className="results">
                  <h2>{result}</h2>

                  <WhiteButton onClick={handleTryAgainClick}>
                  TRY AGAIN
                  </WhiteButton>
              </div>
            </>
          )
    }
      </TableStyled>
    )
  }


  export default Table;
