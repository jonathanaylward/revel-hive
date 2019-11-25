import React from 'react';
import Box from './Components/Box';
import './App.css';


function App() {

  return (
    <div className="App">
        <svg>
        <circle cx={50} cy={50} r={10} fill="red" />
        <polygon cy={200} points="100,100 50,50, 0,0" />
      </svg>
      eat my shorts
      <Box></Box>
    </div>
  );
}

export default App;
