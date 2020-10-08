import React from 'react';
//import logo from './logo.svg';
import my_picture_professional from './my_headshot_professional.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const Bounce= styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bounce><Image src={my_picture_professional} className="App-logo" alt="logo" roundedCircle /></Bounce>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
