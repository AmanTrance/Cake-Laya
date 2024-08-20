import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div id='cards-box'>
        <div id='main-card'>
            <img src={props.img} className='cards-icons'></img>
            <div id='content-text'>
                <h1>75</h1>
                {props.name}<br></br> Onboard!
            </div>
        </div>
    </div>
  )
}

export default Cards