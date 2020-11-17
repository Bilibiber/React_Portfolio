import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import MuiDialog from './MuiDialog'
import './Navbar.css'

function Navbar() {
  const [openDialog, setOpenDialog] = useState(false)

  const [open, setOpen] = useState(false)

  const [button, setButton] = useState(true)

  const handleClick = () => setOpen(!open)

  const closeMenu = () => setOpen(false)

  const showButton = () => {
    if (window.innerWidth <= 960 && button === true) setButton(false)
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
              <a
                href={require('../files/郭帆-詹姆斯麦迪逊大学-2019年12月.pdf')}
                download='郭帆-詹姆斯麦迪逊大学-2019年12月'
                className='nav-links'
                onClick={() => {
                  closeMenu()
                  // setOpenDialog(!openDialog)
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <MuiDialog open={openDialog} setOpenDialog={setOpenDialog}>
        <MuiDialog.Title>Resume</MuiDialog.Title>
        <MuiDialog.Content dividers>
          <MuiDialog.Button variant='outlined' color='primary' href='../files/郭帆-詹姆斯麦迪逊大学-2019年12月.pdf' download>
            中文版
          </MuiDialog.Button>
          <a href={require('../files/郭帆-詹姆斯麦迪逊大学-2019年12月.pdf')} download='郭帆-詹姆斯麦迪逊大学-2019年12月'>
            Resume
          </a>
          <MuiDialog.Button variant='outlined' color='primary' disabled>
            English
          </MuiDialog.Button>
        </MuiDialog.Content>
        <MuiDialog.Actions>
          <MuiDialog.CloseButton open={openDialog} setOpenDialog={setOpenDialog} color='primary'>
            Close
          </MuiDialog.CloseButton>
        </MuiDialog.Actions>
      </MuiDialog>
    </>
  )
}

export default Navbar
