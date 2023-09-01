// ! page with a grid of images from previous days
// Uses PicOfTheDay.js and passes in today's date to get the pic for today

// As shown in Figma plan:
// Displays the  as the background image
// Displays the header at the top of the page
// Displays the title of the image and the copyright holder at the bottom of the page
// ! 


import React from 'react'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'

// components
import Header from './components/Header'
import PicOfTheDay from './components/PicOfTheDay'
import Calendar from './components/Calendar'
import SinglePicInfo from './components/SinglePicInfo'

import { useEffect } from 'react'
import axios from 'axios'

// API Endpoints
const API_KEY = 'HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS'
const PICOFDAY_ENDPOINT = `planetary/apod?api_key=${API_KEY}`

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(PICOFDAY_ENDPOINT) // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/pic-of-the-day' element={<PicOfTheDay />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/pic-info/:id' element={<SinglePicInfo />} />
            {/* add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </BrowserRouter>
  )
}

export default App