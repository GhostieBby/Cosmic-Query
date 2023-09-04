import axios from 'axios'
import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

const API_KEY = 'HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS'
const APOD_ENDPOINT = `/api/planetary/apod?api_key=${API_KEY}`

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    document.querySelectorAll('header ul li a').forEach(link => (link.style.color = '#999'))
    document.querySelector('.link-home').style.color = 'black'
    document.querySelector('header').style.position = 'fixed'
  }, [])

  useEffect(() => {
    axios
      .get(APOD_ENDPOINT)
      .then(({ data }) => {
        setData(data)
        setIsLoading(false)
        console.log(data)
      })
      .catch(error => {
        setIsLoading(false)
        console.error(error)
      })
  }, [])

  const photoExplanation = data.explanation

  useEffect(() => {
    console.log(isHovered)
  }, [isHovered])

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className='container'>
      <img src={data.hdurl} alt='Astronomy Photo of the Day'></img>
      <div
        className={`${isHovered ? 'text-container hovered' : 'text-container'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2>Today&apos;s Astronomy Photo of the Day</h2>
        <h1>{data.title}</h1>
        <p>{photoExplanation}</p>
      </div>
    </div>
  )
}
