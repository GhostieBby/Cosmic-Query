// ! this component displays the image based on the date selected, which is passed from calendar.js


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import selectedDate from './Calendar'

// API Endpoints
const API_KEY = 'HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS'
const PICOFDAY_ENDPOINT = `planetary/apod?api_key=${API_KEY}`

const someObject = { selectedDate }
function PicOfTheDay({ selectedDate }) {
  const [picData, setPicData] = useState(null)

  useEffect(() => {
    const fetchPicOfTheDay = async () => {
      if (selectedDate) {
        const formattedDate = selectedDate.toISOString().split('T')[0]

        try {
          const result = await axios.get(`planetary/apod?api_key=${API_KEY}`)

          if (result.status === 200) {
            setPicData(result.data)
          } else {
            throw new Error('Failed to fetch data')
          }
        } catch (error) {
          console.log('Error: not found')
        }
      }
    }
    fetchPicOfTheDay()
  }, [selectedDate])

  return (
    <div className='pic-of-the-day'>
      {picData ? (
        <>
          <img src={picData.url} alt={picData.title} />
          <p>{picData.title}</p>
          <p>{picData.explanation}</p>
        </>
      ) : (
        <p>Select a date to see the picture of the day!</p>
      )}
    </div>
  )
}

export default PicOfTheDay()