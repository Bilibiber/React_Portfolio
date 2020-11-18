import React from 'react'
import GlobalFooter from '../../Shared/globalFooter/globalFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
          <GlobalFooter.IconLink href='https://space.bilibili.com/430176251' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faYoutube} />
          </GlobalFooter.IconLink>
        </GlobalFooter.Group>
      </GlobalFooter>
    </>
  )
}

export default GlobalFooterContainer
