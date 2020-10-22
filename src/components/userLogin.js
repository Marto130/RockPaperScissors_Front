import React from 'react';
import styled from 'styled-component';



const FormStyled= styled.form`

background: transparent;
display: block;
margin: auto;

input {
  width: 300px;
  margin: auto;
}

button {
  width: 300pc;
  margin: auto;
}

`

function handleSumbmitLogin() {

}





function FormLogin() {

return (

  <FormStyled>
    <form>
      <input type='text' placeholder='username'></input>
      <button type='submit' onSubmit= {handleSumbmitLogin}>LogIn</button>
    </form>
  </FormStyled>

)

}


export default FormLogin;
