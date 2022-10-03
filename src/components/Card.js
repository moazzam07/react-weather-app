import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card_container_1'>
    <div className='card_container_1_header'>
      <h1>{props.data.name}</h1>
    </div>
    <div className='card_container_1_subheader'>
      <p>{props.data.weather[0].main}</p>
      <p>Wind Speed: {props.data.wind.speed} • Precip 0%</p>
    </div>
    <div className='card_container_1_body'>
      <div className='weather_img_container'>
        <img src='clouds.png' alt=''/>
      </div>
      <div className='temp_text'>
        <h1>{Math.trunc(props.data.main.temp - 273.15)}°</h1>
      </div>
    </div>
  </div>
  )
}

export default Card