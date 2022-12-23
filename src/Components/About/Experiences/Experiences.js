import React from 'react'
import './Experiences.css'
export default function Experiences(props) {
  return (
    <>
      <div className="experiences">
        <div className="experiencesObj">
            <h3>{props.head}</h3>
            <div className='bg'>
                <div className="fg" style={{width:`${props.width}`}}>  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
