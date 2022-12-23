import React from 'react'
// import ProjectTemplate from '../ProjectTemplate/ProjectTemplate'
import Template from '../template/Template'
import tic from '../../../media/tic-tac-toe';
import cal from '../../../media/calculator';
import notepad from '../../../media/notepad';
import voice from '../../../media/voice';
import text2speech from '../../../media/text2speech';
import clock from '../../../media/clock';
import motion from '../../../media/motion';
import primeChecker from '../../../media/primeChecker';
import download from '../../../media/download';
export default function Python() {
    return (
        <>
             <div className="bodyCon projectCon">
                <div className="bodyComponent">
                    <div className="aboutHeading projectHeading">
                        <h1>Python</h1>
                        <div className="container">
                            <div className="projects">
                                <a href='https://github.com/Zer-0ne/Python-Tic-Tac-Toe' target='_blank' rel="noreferrer">
                                    <Template img={tic} />
                                </a>
                                <a href="https://github.com/Zer-0ne/Python-Calculator" target='_blank' rel="noreferrer">
                                    <Template img={cal} />
                                </a>
                                <a href="https://github.com/Zer-0ne/Python-Notepad" target='_blank' rel="noreferrer">
                                    <Template img={notepad} />
                                </a>
                                <a href="https://github.com/Zer-0ne/Voice-Assistance" target='_blank' rel="noreferrer">
                                    <Template img={voice} />
                                </a>
                                <a href="https://github.com/Zer-0ne/text2speech" target='_blank' rel="noreferrer">
                                    <Template img={text2speech} />
                                </a>
                                <a href="https://github.com/Zer-0ne/AlarmClock" target='_blank' rel="noreferrer">
                                    <Template img={clock} />
                                </a>
                                <a href="https://github.com/Zer-0ne/MotionDetection" target='_blank' rel="noreferrer">
                                    <Template img={motion} />
                                </a>
                                <a href="https://github.com/Zer-0ne/PrimeInInterval" target='_blank' rel="noreferrer">
                                    <Template img={primeChecker} />
                                </a>
                                <a href="https://github.com/Zer-0ne/YoutubeVideoDownloader" target='_blank' rel="noreferrer">
                                    <Template img={download} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
