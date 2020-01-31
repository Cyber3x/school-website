import React, { Component } from 'react';
import faceShot from '../assets/img/neven.png';
import MainText from './mainText/MainText';
import Contacts from './contacts/Contacts';
import Card from './card/Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      contributions: []
    };
  }

  render() {
    return (
      <div className='background'>
        <div className='center-content'>
          <img src={faceShot} alt="Neven's avatar" className='avatar' />
          <MainText />
          <div className='info-cards'>
            <Card
              title='About me'
              content={
                <div>
                  <p className='about-text'>
                    Currently in high school working on school stuff and
                    programming in my free time. I mostly develop webapps and
                    websites, but in school I work with python. I also enjoy
                    graphic design, good food and friends.
                  </p>
                </div>
              }
            />
            <Card title='Projects' list content={this.state.projects} />
            <Card
              title='Contributions'
              list
              content={this.state.contributions}
            />
          </div>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
