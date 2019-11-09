import React from 'react';
import faceShot from '../assets/img/neven.png'
import background from '../assets/img/background1.png'
import MainText from './mainText/MainText'
import './App.css';

function App() {
  return (
    <div>
      <img src={background} alt="background" className="background" />
      <div className="container">
        <div className='center-content'>
          <img src={faceShot} alt="Neven's avatar" className="avatar" />
          <MainText />
        </div>
      </div>
    </div>
  );
}

export default App;
