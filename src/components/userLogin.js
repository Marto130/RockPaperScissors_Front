import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

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
}



function FormLogin() {

return (
<>
  <FormStyled>
      <input type="text" name= "userName" placeholder="Username"></input>
      <button type="button" onClick= {handleSumbmitLogin}>
      Login
      </button>
  </FormStyled>
</>
)

}


export default FormLogin;
