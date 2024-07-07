import React, { useState } from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
  return (
    <div className="card"  key={props.item.idMeal}>
    <div className="card-image-container">
    <img src={props.item.strMealThumb} />
    <button className='view-button' onClick={()=>{props.showpopup(props.item.strMeal)}}>View</button>
    </div>
    <p className="dish-name">{props.item.strMeal}</p>
  </div>
  )
}

export default Card