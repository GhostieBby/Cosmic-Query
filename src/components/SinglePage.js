import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import LoadingSpinner from './LoadingSpinner'

const API_KEY = 'HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS'
const APOD_ENDPOINT = `/api/planetary/apod?api_key=${API_KEY}`

export default function SinglePage() {
  const { photoId } = useParams()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  // Set initial styles on initial render
  useEffect(() => {
    document.querySelectorAll('header ul li a').forEach(link => (link.style.color = '#999'))
  }, [])

  useEffect(() => {
    getData(photoId)
  }, [])

  useEffect(() => console.log(data), [data])

  async function getData(id) {
    try {
      const response = await axios.get(`${APOD_ENDPOINT}&date=${id}`)
      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className='container-single-page'>
      <img src={data.hdurl}></img>
      <div className='container-single-page-content'>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
        <h2>{data.copyright}</h2>
        <p>{data.explanation}</p>
      </div>
    </div>
  )
}
