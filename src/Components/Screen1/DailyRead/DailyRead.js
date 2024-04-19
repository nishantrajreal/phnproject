import React from 'react'
import taskimage from '../../../Otherfile/taskimage.jpg'

function DailyRead() {
  return (
    <div className='container'>
        <h1>DailyRead</h1>
        <img src={taskimage} alt="task" class="task-image"/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='rounded-button'>Read more</button>
    </div>
  )
}

export default DailyRead