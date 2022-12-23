import React from 'react'
import Template from '../template/Template'
import analog from '../../../media/analog';
// import ProjectTemplate from '../ProjectTemplate/ProjectTemplate'
export default function ReactJs() {
  return (
    <>
    <div className="bodyCon projectCon">
        <div className="bodyComponent">
          <div className="aboutHeading projectHeading">
            <h1>React Js</h1>
            <div className="container">
              <div className="projects">
                <a href='https://zer-0ne.github.io/Analog-clock/' target='_blank' rel="noreferrer">
                  <Template img={analog} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
