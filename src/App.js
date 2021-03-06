import React, {createContext, useState} from 'react';
import Header from './components/header.js';
import Wrapper from './components/wrapper.js';
import Table from './components/table.js';
import Rules from './components/rules.js';

import styled from 'styled-components';

//---------------------------------------------------

export const ScoreContext= createContext();

const AppStyled = styled.main`
  box-sizing: border-box;
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  font-family: 'Barlow Semi Condensed', 'sans-serif';
  color: white;

  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/

  .app-content {
    box-sizing: border-box;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  `



function App() {
  const [score, setScore]= useState(0)
  return (
  <ScoreContext.Provider value={{score, setScore}}>
    <AppStyled>
      <Wrapper>
        <div className= "app-content">
          <Header/>
          <Table/>
          <Rules/>
        </div>
      </Wrapper>
    </AppStyled>
  </ScoreContext.Provider>
  );
}

export default App;
