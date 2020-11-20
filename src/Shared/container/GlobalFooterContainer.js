import React from 'react'
import GlobalFooter from '../globalFooter/globalFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { RiBilibiliLine } from 'react-icons/ri'

function GlobalFooterContainer() {
  return (
    <>
      <GlobalFooter>
        <GlobalFooter.Group>
          <GlobalFooter.LogoLink to='/home'>
            Bilibiber <FontAwesomeIcon icon={faFan} />
          </GlobalFooter.LogoLink>
        </GlobalFooter.Group>
        <GlobalFooter.Group>
          <small>Blibiber © 2020</small>
        </GlobalFooter.Group>
        <GlobalFooter.Group>
          <GlobalFooter.IconLink href='https://github.com/FanGuo484' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </GlobalFooter.IconLink>
          <GlobalFooter.IconLink
            font='36px'
            href='https://space.bilibili.com/430176251'
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiBilibiliLine />
          </GlobalFooter.IconLink>
        </GlobalFooter.Group>
      </GlobalFooter>
    </>
  )
}

export default GlobalFooterContainer
