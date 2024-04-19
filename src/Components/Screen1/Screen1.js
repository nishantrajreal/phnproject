import React from 'react'
import Header from '../Header'
import UpcomingConsultations from './UpcomingConsultations/UpcomingConsultations';
import Calendar from './CalenderDetails/Calendar';
import NextPatient from './CalenderDetails/NextPatient';
import DailyReadContainer from './DailyRead/DailyReadContainer';
import CalendersDetailsContainer from './CalenderDetails/CalendersDetailsContainer';

function Screen1() {
  return (
    <div className='screen1-bg'>
        <Header />
      <div >
        <h1>Welcome Dr. Doe!</h1>
        <div className='flex screen1-content' >
          <div className='flex-col'>
            <div >
              <DailyReadContainer />
            </div>
            <div className='flex'>
              <CalendersDetailsContainer />
            </div>
          </div>
          <div className='right'> 
            <UpcomingConsultations />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen1