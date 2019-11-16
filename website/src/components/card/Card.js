import React from 'react'
import './Card.css'

const Card = props =>  {
    return (
        <div className='card' onClick={() => props.onClick(props.text)}>
            <p className='card-text'>{props.text}</p>
        </div>
    )
}

export default Card;
