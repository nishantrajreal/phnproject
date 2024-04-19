import React,{useState,useEffect} from 'react'
import PatientCard from './PatientCard'
import {createContext} from 'react';

export const AppContext = createContext(null);

function UpcomingConsultations() {
  const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://assessment.banoskolar.com/api/patientsList')
        .then(res=>res.json())
        .then(data => setData(data.patients))
        .catch(error => console.error('Error fetching data:', error));
    },[])
    console.log(data)
    
  return (
    <AppContext.Provider value ={{data,setData}}>
    <div className='upcomingfull container'>
        <h1>Upcoming Consultations</h1>
      {data.map((patient, index) => (
        <PatientCard key={index} patient={patient} />
      ))}
    </div>
    </AppContext.Provider>
    
  )
}

export default UpcomingConsultations