import React from 'react'
import profileimage from '../../../Otherfile/profileimage.jpg'
import { useContext } from 'react'
import { AppContext } from '../UpcomingConsultations/UpcomingConsultations'
import {Link} from 'react-router-dom'

function NextPatient() {
  return (
    <div className='flex-col' >
      <div className='flex'>
        <h1>Next Patient's Details</h1>
        <button><Link to = "/Screen2">redirect</Link></button>
      </div>
      <img src={profileimage} className='nextpatient-image'/>
      <div>
      <h2>name</h2>
      <div className='flex'>
        <h2>age</h2>
        <h2>location</h2>
      </div>
      <div className='flex'>
        <div className='flex-col'>
          <h2>Blood</h2>
          <p>blood</p>
        </div>
        <div className='flex-col'>
          <h2>Height</h2>
          <p>height</p>
        </div>
        <div className='flex-col'>
          <h2>Weight</h2>
          <p>weight</p>
        </div>
      </div>
      <div>
        <div className='flex'>
          <h2>Summary</h2>
          <h2>Condition</h2>
          <h2>Notes</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NextPatient