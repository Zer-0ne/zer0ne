import React from 'react'
import './Details.css'
export default function Details(props) {
  return (
    <>
      <div className="details">
        <div className="detailsObj">
        <h3>{props.Heading} :</h3>
        <p>{props.p}</p>
        </div>
      </div>
    </>
  )
}
