import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)

  const location = useLocation()
  let hideTimeout

  console.log(location.pathname)

  useEffect(() => {
    location.pathname !== '/browse' ? hideHeader() : undefined
    if (hideTimeout) {
      clearTimeout(hideTimeout)
    }
  }, [])

  const hideHeader = function () {
    hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 1000)
  }

  return (
    <header
      className={`${isVisible ? 'visible' : 'hidden'}`}
      onMouseEnter={() => {
        clearTimeout(hideTimeout)
        setIsVisible(true)
      }}
      onMouseLeave={location.pathname !== '/browse' ? hideHeader : undefined}
    >
      <ul>
        <li>
          <Link className='link-home' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='link-browse' to='/browse'>
            Browse
          </Link>
        </li>
      </ul>
      <img
        width='48px'
        src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'
      ></img>
    </header>
  )
}
