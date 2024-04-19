import React from 'react'
import Calendar from './Calendar'
import NextPatient from './NextPatient'

function CalendersDetailsContainer() {
  return (
    <div className='flex calenderDetails container '>
        <Calendar />
        <NextPatient />
    </div>
  )
}

export default CalendersDetailsContainer