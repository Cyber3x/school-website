import React from 'react'
import './Base.css'

const Projects = props => {
    return (
        <div className='about'>
            <div className='header'>
                <p className='title'>Projects</p>
                <p className='back' onClick={() => props.onClick()}>Back</p>
            </div>
            <div className='items'>
                {/* <p>None yet!</p> */}
            </div>
        </div>
    )
}

export default Projects
