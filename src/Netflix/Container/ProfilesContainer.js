import React from 'react'
import Header from '../Header/NetflixHeader'
import UserProfiles from '../UserProfiles/UserProfiles'

export function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to="/Netflix" src="/images/icons/logo.svg" alt="Netflix" />
        </Header.Frame>
      </Header>

      <UserProfiles>
        <UserProfiles.Title>Who is watching?</UserProfiles.Title>
        <UserProfiles.List>
          <UserProfiles.Item onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
            <UserProfiles.Pic src={user.photoURL} />
            <UserProfiles.UserName>{user.displayName}</UserProfiles.UserName>
          </UserProfiles.Item>
        </UserProfiles.List>
      </UserProfiles>
    </>
  )
}
