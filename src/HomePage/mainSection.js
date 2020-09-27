import React from 'react'
import './mainSection.css'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

function MainSection() {
    return (
        <>
            <div className='main-container'>
                <video src="../videos/video-2.mp4" type="video/mp4" autoPlay loop muted/>
                <h1>Welcome Come To BilBiber</h1>
                <p>Shout out to CypherPunk.</p>
                <div className="main-btns">
                    <Button className="btns" buttonStyle="btn-out" buttonSize="btn-lg">
                       Demos
                    </Button>
                    <Button className="btns" buttonStyle="btn-p" buttonSize="btn-lg">
                       Watch Me <FontAwesomeIcon icon={faPlayCircle}/>
                    </Button>
                </div>
            </div>
        </>
    )
}
export default MainSection
