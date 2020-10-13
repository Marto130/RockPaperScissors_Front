import React from 'react';

// import './App.css';
import Header from './components/header.js';
import Wrapper from './components/wrapper.js';
import Table from './components/table.js';
import Rules from './components/rules.js';

import styled from 'styled-components';

//---------------------------------------------------

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  font-family: 'Barlow Semi Condensed', 'sans-serif';
  color: white;

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
  `

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className= "app-content">
          <Header/>
          <Table/>
          <Rules/>
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
