// ! this displays the calendar drop-down


import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PicOfTheDay from './PicOfTheDay'

function Calendar( { onSelectDate }) {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
    onSelectDate(date) // passes the selected date to the parent componnent
  }

  return (
    <div className={selectedDate}>
      <h2>Select a Date</h2>
      <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat='yyy-mm-dd' placeholderText='Select a Date'/>
      <PicOfTheDay selectedDate={selectedDate} apikey='HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS' />
    </div>
  )
}

export default Calendar