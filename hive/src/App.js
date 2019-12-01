import React from 'react';
import Hexagon from './Components/Hexagon';
import HiveNav from './Components/HiveNav'
import styled from "styled-components";
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
      <Container>
        <HiveNav></HiveNav>
      </Container>
    </div>
  );
}

export default App;
