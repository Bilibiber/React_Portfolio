import React from 'react'
import Header from '../Header/NetflixHeader'

function HeaderContainer({ children, ButtonText }) {
  var targetSite = '/Netflix/' + ButtonText.replace(/\s/g, '').toLowerCase()
  return (
    <>
      <Header height='100vh'>
        <Header.Frame>
          <Header.Logo src='/images/icons/logo.svg' alt='Home' to='/Netflix' />
          <Header.ButtonLink to={targetSite}>{ButtonText}</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  )
}

export default HeaderContainer
