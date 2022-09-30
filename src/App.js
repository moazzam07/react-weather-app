import React, { useState } from 'react'
import Card from './components/Card' 
import Axios from 'axios'
import { TextField} from '@mui/material'

import './App.css'

const App = () => {
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
     </div>
    </div>
  );
}

export default App