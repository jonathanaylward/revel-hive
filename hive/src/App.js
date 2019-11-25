import React from 'react';
import posed from "react-pose";
import styled from "styled-components";
import './App.css';

state = { hovering: false };

const Container = styled.div`
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledSquare = styled(Square)`
  width:100px;
  height: 100px;
  background:red;
`;

function App() {

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
