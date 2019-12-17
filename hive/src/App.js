import React from 'react';
import NavController from './Components/NavController'
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
    height: 650px;
`;

function App() {

  return (
    <div className="App">
      <Container>
        <NavController></NavController>
      </Container>
    </div>
  );
}

export default App;
