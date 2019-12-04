import React from 'react';
import HiveNav from './Components/HiveNav'
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
        <HiveNav></HiveNav>
      </Container>
    </div>
  );
}

export default App;
