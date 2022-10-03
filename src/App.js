import React, { useState } from 'react'
import Card from './components/Card' 
import Axios from 'axios'
import { TextField} from '@mui/material'

import './App.css'

const App = () => {

  const [city,setCity] = useState("");
  const [weatherData,setWeatherData] = useState("");
  const [geoData,setGeoData] = useState("");
  async function inputHandler() {
    if(city === "") alert('Enter a Vaid City Name...')
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
      `,
    );
    setWeatherData(response.data);
    setGeoData(response.data);
    console.log(response.data);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <div className='home_container'>
      <div className='grid_container_1'>
        <div className='img_container'>
          <img src="weather.gif" alt=''/>
        </div>
      </div>
      <div className='grid_container_2'>
        <div className='grid_container_2_header'>
          <h1>Weather Buddy</h1>
        </div>
        <div className='grid_container_2_input'>
          <TextField id="outlined-basic" label="Enter your City" variant="outlined" value={city} onChange={handleChange}/>
          <button onClick={inputHandler}>Submit</button>
        </div>
        <div className='card_container'>
        {weatherData != "" &&
          <Card data={weatherData}/>
        }
        </div>
     </div>
    </div>
  );
}

export default App