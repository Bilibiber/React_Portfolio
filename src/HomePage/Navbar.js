import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  const [button, setButton] = useState(true)

  const handleClick = () => setOpen(!open)

  const closeMenu = () => setOpen(false)

  const showButton = () => {
    if (window.innerWidth <= 960 && button == true) setButton(false)
    else setButton(true)
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMenu}>
            Bilibiber <FontAwesomeIcon icon={faFan} className='faFan' />
          </Link>
          <div className='menu-icon'>
            <FontAwesomeIcon onClick={handleClick} icon={open ? faTimes : faBars} className='faFan' />
          </div>
          <ul className={open ? 'nav-menu open' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links' onClick={closeMenu}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
