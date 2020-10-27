import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {WhiteButton} from './button.js';

import {socket} from '../socketManage.js';



const FormStyled= styled.form`

background: transparent;
height: 100vh;
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


input {
  width: 250px;
  height: 3em;
  border: none;
  border-radius: 5px;
  margin: 1em 1em;
  text-align: center;
  font-size: 1em;
  outline: none;

  &::placeholder {

    font-size: 1em;
    text-align: center;

  }
}

button {
  background: rgb(151, 117, 212);
  width: 150px;
  height: 3em;
  border: none;
  border-radius: 3px;
  margin: 1em 1em;
  color: white;


  &:hover {
    background: rgb(106, 47, 213);
  }
}

`

function handleSumbmitLogin(event) {
event.preventDefault();
const form = document.querySelector('input').parentElement;
const formData = new FormData(form);
console.log(formData.get('userName'));

socket.emit('login', formData.get('userName'))
}

socket.on('token', (data)=>{
  console.log(data);
})


function FormLogin() {

return (
<>
  <FormStyled>
      <input type="text" name= "userName" placeholder="Username"></input>

        <WhiteButton onClick= {handleSumbmitLogin}>
          <Link to= "/" style={{textDecoration:'none'}}>
            Login
          </Link>
        </WhiteButton>

  </FormStyled>
</>
)

}


export default FormLogin;
