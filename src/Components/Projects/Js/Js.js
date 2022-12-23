import React from 'react'
import Template from '../template/Template'
import tic from '../../../media/tic-tac-toe';
import primeChecker from '../../../media/primeChecker';
import wordConter from '../../../media/wordConter';

// import ProjectTemplate from '../ProjectTemplate/ProjectTemplate'
export default function Js(props) {
    return (
        <>
            <div className="bodyCon projectCon">
                <div className="bodyComponent">
                    <div className="aboutHeading projectHeading">
                        <h1>JavaScript</h1>
                        <div className="container">
                            <div className="projects">
                                <a href='https://zer-0ne.github.io/Tic-Tac-toe' target='_blank' rel="noreferrer">
                                    <Template img={tic} />
                                </a>
                                <a href="https://zer-0ne.github.io/PrimeChecker/" target='_blank' rel="noreferrer">
                                    <Template img={primeChecker} />
                                </a>
                                <a href='https://zer-0ne.github.io/Word-Counter/' target='_blank' rel="noreferrer">
                                    <Template img={wordConter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
