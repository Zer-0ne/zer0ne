import React from 'react'
import './Template.css'
export default function Template(props) {
  return (
    <>
      <div className="project">
        <div className="template">
          <img src={props.img} alt="not loaded" />
          {/* <video
            src={props.src}
            autoPlay={true}
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            muted={true}
          ></video> */}
        </div>
      </div>
    </>
  )
}
