import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Context/firebase'

export default function useAuthListener() {
  //check if user in LocalStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('authUser', JSON.stringify(user))
        setUser(user)
      } else {
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })

    return () => listener()
  }, [])

  return { user }
}
