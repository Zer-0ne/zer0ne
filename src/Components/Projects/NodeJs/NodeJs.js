import React from 'react'
import Template from '../template/Template'
import loginSignup from '../../../media/loginSignup'
export default function NodeJs() {
  return (
    <>
      <div className="bodyCon projectCon">
        <div className="bodyComponent">
          <div className="aboutHeading projectHeading">

            <h1>Node Js</h1>
            <div className="container">
              <div className="projects">
                <a href='https://github.com/Zer-0ne/LoginForm' target='_blank' rel="noreferrer">
                  <Template img={loginSignup} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
