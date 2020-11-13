import React, { useState, useContext, useEffect } from 'react'
import { ProfileContainer } from './ProfilesContainer'
import { FirebaseContext } from '../Context/firebase'

export default function BrowseContainer() {
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState({})

  useEffect(() => {
    console.log('profile', profile)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return (
    <>
      <ProfileContainer user={user} setProfile={setProfile} />
    </>
  )
}
