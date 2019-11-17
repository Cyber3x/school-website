import React from 'react'
import './Base.css'

const Contributions = props => {
    return (
        <div className='about'>
            <div className='header'>
                <p className='title'>Contributions</p>
                <p className='back' onClick={() => props.onClick()}>Back</p>
            </div>
            <div className='items'>
                {/* <p>None yet!</p> */}
            </div>
        </div>
    )
}

export default Contributions
