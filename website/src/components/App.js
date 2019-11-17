import React, { Component } from 'react';
import faceShot from '../assets/img/neven.png'
import background from '../assets/img/background.png'
import MainText from './mainText/MainText'
import Card from "./card/Card";
import Contacts from "./contacts/Contacts";
import About from "./card-content/About"
import Projects from "./card-content/Projects"
import Contributions from "./card-content/Contributions"
import Modal from 'react-modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutModal: false,
      showProjectsModal: false,
      showContributionsModal: false
    };
    Modal.setAppElement('#root');
  }

  changeAboutModal = () => {
    this.setState({ showAboutModal: !this.state.showAboutModal })
  }

  changeProjectsModal = () => {
    this.setState({ showProjectsModal: !this.state.showProjectsModal })
  }

  changeContributionsModal = () => {
    this.setState({ showContributionsModal: !this.state.showContributionsModal })
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
              <Card text='About' onClick={() => this.changeAboutModal()} />
              <Card text='Projects' onClick={() => this.changeProjectsModal()} />
              <Card text='Contributions' onClick={() => this.changeContributionsModal()} />
            </div>
            <Contacts />
          </div>
        </div>
        <Modal
          isOpen={this.state.showAboutModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.changeAboutModal}
          className='modal'
          overlayClassName='overlay'
        >
          <About onClick={() => this.changeAboutModal()}/>
        </Modal>

        <Modal
          isOpen={this.state.showProjectsModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.changeProjectsModal}
          className='modal'
          overlayClassName='overlay'
        >
          <Projects onClick={() => this.changeProjectsModal()}/>
        </Modal>

        <Modal
          isOpen={this.state.showContributionsModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.changeContributionsModal}
          className='modal'
          overlayClassName='overlay'
        >
          <Contributions onClick={() => this.changeContributionsModal()}/>
        </Modal>

      </div>
    );
  }
}


export default App;
