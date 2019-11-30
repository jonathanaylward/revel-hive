import React from 'react';
import Box from './Components/Box';
import './App.css';


function App() {

  return (
    <div className="App">
        <svg>
        <circle cx={50} cy={50} r={10} fill="red" />
        <polygon points="200,0 275,75 275,150, 200,225, 125,150 125,75" style={{fill:"lime",stroke:"purple","stroke-width":1}} />
        Sorry, your browser does not support inline SVG.
        </svg>
      eat my shorts
      <Box></Box>
    </div>
  );
}

export default App;
