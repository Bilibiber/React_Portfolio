import React from 'react'
import './mainSection.css'
import '../App.css'
import './Button.css'

function MainSection() {
  const Jump = () => {
    let anchor = document.getElementById('demo')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  return (
    <>
      <div className='main-container'>
        <video src='../videos/Cyberpunk.mp4' type='video/mp4' autoPlay loop muted />
        <h1>Welcome To BiliBiber</h1>
        <p>Shout out to CypherPunk.</p>
        <div className='main-btns'>
          <button className='btn btn-m btn-out' onClick={Jump}>
            Demo
          </button>
        </div>
      </div>
    </>
  )
}
export default MainSection
