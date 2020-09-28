import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faAlipay } from '@fortawesome/free-brands-svg-icons'
import { faFan } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                   WANTS A WEBSITE LIKE THIS ?
                </p>
                <p className='footer-subscription-text'>
                    Send me your email
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn-out' path="/">Send</Button>
                    </form>
                </div>
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Blibiber
                            <FontAwesomeIcon icon={faFan} className="faFan" />
                        </Link>
                    </div>
                    <small className='website-rights'>Blibiber © 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link
                            className='social-icon-link alipay'
                            to='Alipay'
                            target='_blank'
                            aria-label='Alipay'
                        >
                            <FontAwesomeIcon icon={faAlipay} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;