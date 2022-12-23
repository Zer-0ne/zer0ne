import React from 'react'
import './Commingsoon.css'
import Typewriter from 'typewriter-effect';
export default function CommingSoon() {
    return (
        <>
            <div className="bodyCon bodyHome">
                <div className="bodyComponent projectComponent comming">
                        <h2><Typewriter className='type' options={{ strings: ['Coming Soon...'], autoStart: true, loop: true, }} /></h2>
                    
                </div>
            </div>
        </>
    )
}
