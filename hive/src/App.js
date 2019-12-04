import React from 'react';
import NavController from './Components/NavController'
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {

  return (
    <div className="App">
      {/* <Game></Game> */}
      <Container>
        <NavController></NavController>
      </Container>
    </div>
  );
}

export default App;
