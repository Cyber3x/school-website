import React, { Component } from 'react';
import faceShot from '../assets/img/neven.png'
import background from '../assets/img/background.png'
import MainText from './mainText/MainText'
import Card from "./card/Card";
import Contacts from "./contacts/Contacts";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <img src={background} alt="background" className="background" />
        <div className="container">
          <div className='center-content'>
            <img src={faceShot} alt="Neven's avatar" className="avatar" />
            <MainText />
            <div className='info-cards'>
              <Card text='About' onClick={(text) => console.log(text)}/>
              <Card text='Project' onClick={(text) => console.log(text)}/>
              <Card text='Contributions' onClick={(text) => console.log(text)}/>
            </div>
            <Contacts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
