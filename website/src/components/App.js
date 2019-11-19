import React, { Component } from 'react';
import faceShot from '../assets/img/neven.png'
import MainText from './mainText/MainText'
import Contacts from "./contacts/Contacts";
import Card from "./card/Card";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 0, title: 'CyberStore', role: 'Founder', link: 'https://github.com/Cyber3x/project-profit' },
        { id: 1, title: 'ProjectProfit', role: 'Lead', link: 'https://github.com/Cyber3x/project-profit' },
      ]
    };
  }

  render() {
    return (
      <div className='background'>
        <div className='center-content'>
          <img src={faceShot} alt="Neven's avatar" className="avatar" />
          <MainText />
          <div className='info-cards'>
            <Card title='About me' content={<div><h1>1</h1></div>} />
            <Card title='Projects' list content={this.state.projects} />
            <Card title='Contributions' list content={this.state.projects} />
          </div>
          <Contacts />
        </div>
      </div>
    );
  }
}


export default App;
