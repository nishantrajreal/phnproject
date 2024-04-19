import React,{useState,useEffect} from 'react'
import sampleimage from '../../../Otherfile/sampleperson.jpg'
import {Link} from 'react-router-dom'

function PatientCard({patient}) {

  return (
    <div className='flex upcoming container' >
        <img src={sampleimage} className='image'/>
        <div className='flex-col'>
            <h2><Link to = "/Screen2">{patient.name}</Link></h2>
                <div>
                    <h2>{patient.created_at}</h2>
                </div>
        </div>
        <button className='rounded-button'>clinical record</button>
    </div>
  )
}

export default PatientCard