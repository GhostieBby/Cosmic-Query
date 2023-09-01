// ! its a header, what do you want me to say

import React, { useState } from 'react'
import Calendar from './Calendar'
import { Link } from 'react-router-dom'

function Header() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }
  const handleDateSelect = (date) => {
    setSelectedDate(date) // update selectedDate state
    toggleCalendar() // close the calendar 
  }

  return (
    <div className='header'>
      <input type='text' placeholder='Search Calendar' onClick={toggleCalendar} />
      {showCalendar && <Calendar onSelectDate={handleDateSelect} />}
    </div>
  )
}

export default Header