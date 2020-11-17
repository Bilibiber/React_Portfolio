import React from 'react'
import NetflixFooter from '../footer/Netflix-footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
function FooterContainer() {
  return (
    <>
      <NetflixFooter>
        <NetflixFooter.Title>Question?</NetflixFooter.Title>
        <NetflixFooter.Break />
        <NetflixFooter.Row>
          <NetflixFooter.Column>
            <NetflixFooter.Link href='https://help.netflix.com/zh-cn/node/412'>FAQ</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Investor Relations </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Ways to Watch</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Corporate Information</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Netflix Originals</NetflixFooter.Link>
          </NetflixFooter.Column>

          <NetflixFooter.Column>
            <NetflixFooter.Link href='#'>Help Center</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Jobs </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Terms of Use</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Contact Us</NetflixFooter.Link>
          </NetflixFooter.Column>

          <NetflixFooter.Column>
            <NetflixFooter.Link href='#'>Account</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Redeem Gift Cards </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Privacy</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Speed Test</NetflixFooter.Link>
          </NetflixFooter.Column>

          <NetflixFooter.Column>
            <NetflixFooter.Link href='#'>Media Center</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Buy Gift Cards </NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Cookie Preferences</NetflixFooter.Link>
            <NetflixFooter.Link href='#'>Legal Notices</NetflixFooter.Link>
          </NetflixFooter.Column>
        </NetflixFooter.Row>
        <NetflixFooter.Break />
      </NetflixFooter>
      <NetflixFooter.BiliBiber>
        <NetflixFooter.Group font='32px' right='10px'>
          <NetflixFooter.Logo>
            <NetflixFooter.Link href='/home'>
              Blibiber
              <FontAwesomeIcon icon={faFan} />
            </NetflixFooter.Link>
          </NetflixFooter.Logo>
        </NetflixFooter.Group>
        <NetflixFooter.Group>
          <small className='website-rights'>Blibiber © 2020</small>
        </NetflixFooter.Group>
      </NetflixFooter.BiliBiber>
    </>
  )
}

export default FooterContainer
