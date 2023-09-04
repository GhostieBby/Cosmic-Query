import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import LoadingSpinner from './LoadingSpinner'

const API_KEY = 'HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS'
const ENDPOINT = `/planetary/apod?api_key=${API_KEY}`

export default function Browse() {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1 // months are zero-based so add 1
  const day = currentDate.getDate()

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [startDate, setStartDate] = useState(getDateSub30Days())
  const [endDate, setEndDate] = useState(formattedDate)

  // Set initial styles on initial render
  useEffect(() => {
    document.querySelectorAll('header ul li a').forEach(link => (link.style.color = '#999'))
    document.querySelector('.link-browse').style.color = 'black'
    document.querySelector('header').style.position = 'unset'
  }, [])

  // Get photos initially
  useEffect(() => {
    getPhotos(startDate, endDate)
  }, [])

  async function getPhotos(startDate, endDate) {
    try {
      const response = await axios.get(`${ENDPOINT}&start_date=${startDate}&end_date=${endDate}`)
      if (response.data.length > 0) {
        console.log(response.data)
        setData(response.data.slice().reverse())
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  function getDateSub30Days() {
    const thirtyDaysAgo = new Date(currentDate)
    thirtyDaysAgo.setDate(currentDate.getDate() - 29)

    const thirtyDaysAgoYear = thirtyDaysAgo.getFullYear()
    const thirtyDaysAgoMonth = thirtyDaysAgo.getMonth() + 1
    const thirtyDaysAgoDay = thirtyDaysAgo.getDate()

    return `${thirtyDaysAgoYear}-${thirtyDaysAgoMonth < 10 ? '0' : ''}${thirtyDaysAgoMonth}-${
      thirtyDaysAgoDay < 10 ? '0' : ''
    }${thirtyDaysAgoDay}`
  }

  return (
    <div className='container-browse-page'>
      <div className='container-filters'>
        <div className='container-dates'>
          <div className='container-date'>
            <label htmlFor='start-date'>Start Date:</label>
            <input
              type='date'
              id='start-date'
              name='start-date'
              defaultValue={getDateSub30Days()}
              min='2015-01-01'
              max={formattedDate}
              onChange={e => setStartDate(e.target.value)}
            ></input>
          </div>
          <div className='container-date'>
            <label htmlFor='end-date'>End Date:</label>
            <input
              type='date'
              id='end-date'
              name='end-date'
              defaultValue={formattedDate}
              min='2015-01-01'
              max={formattedDate}
              onChange={e => setEndDate(e.target.value)}
            ></input>
          </div>
        </div>
        <button
          onClick={() => {
            setIsLoading(true)
            getPhotos(startDate, endDate)
          }}
        >
          Apply Filter
        </button>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='container-grid'>
          {data.map((item, idx) => {
            if (item.media_type === 'video') {
              return
            } else {
              return (
                <Link key={idx} to={`/${item.date}`}>
                  <img src={item.url}></img>
                </Link>
              )
            }
          })}
        </div>
      )}
    </div>
  )
}
