import React from 'react'
import DailyRead from './DailyRead'
import TodayTaskCard from './TodayTask/TodayTaskCard'


function DailyReadContainer() {
  return (
    <div className='DailyRead flex container'>
        <DailyRead />
        <TodayTaskCard />
    </div>
  )
}

export default DailyReadContainer