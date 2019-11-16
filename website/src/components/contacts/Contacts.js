import React from 'react'
import ReactTooltip from 'react-tooltip'

import './Contacts.css'

import githubLogo from '../../assets/img/github.png'
import twitterLogo from '../../assets/img/twitter.png'
import twitchLogo from '../../assets/img/twitch.png'


const Contacts = () =>  {
    return (
        <div className='contacts'>
            <ReactTooltip border={true}/>
            <a data-tip="Twitter" href="https://twitter.com/Cyber3x_" target="_blank" className='logo'>
                <img src={twitterLogo} alt="Twitter's logo" className='logo-img'/>
            </a>
            

            <a data-tip="Github" href="https://github.com/Cyber3x" target="_blank" className='logo'>
                <img src={githubLogo} alt="Github's logo" className='logo-img'/>
            </a>

            <a data-tip="Twitch " href="https://www.twitch.tv/cyber3x" target="_blank" className='logo'>
                <img src={twitchLogo} alt="Twitch's logo" className='logo-img'/>
            </a>
            
        </div>
    )
}

export default Contacts
