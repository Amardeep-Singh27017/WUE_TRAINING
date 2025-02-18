import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card_container'>
      <div className="card">
        <img src={props.img} alt=""
          width={250} style={{ border: "2px solid red" }} />
        <h1>{props.Title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
