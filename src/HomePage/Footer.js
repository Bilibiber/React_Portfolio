import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faWeixin } from '@fortawesome/free-brands-svg-icons'
import { faFan, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Like what you see here?</p>
        <p className='footer-subscription-text'>Contact me via</p>
        <div className='contact-list'>
          <div className='iconPadding'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>guofx@dukes.jmu.edu</span>
          </div>
          <div className='iconPadding'>
            <FontAwesomeIcon icon={faWeixin} />
            <span>gf771026471</span>
          </div>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Blibiber
              <FontAwesomeIcon icon={faFan} className='faFan' />
            </Link>
          </div>
          <small className='website-rights'>Blibiber © 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link' to='/home' aria-label='Instagram'>
              <FontAwesomeIcon icon={faWeixin} />
            </Link>
            <a className='social-icon-link' href='https://space.bilibili.com/430176251' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
