import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../Context/firebase'
import { GlobalStyle } from '../Global-style'
import NetflixFooter from '../Container/FooterContainer'
import Header from '../Container/HeaderContainer'
import UserForm from '../UserForm/UserForm'

function SignIn() {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const isInvalid = password === '' || email === ''

  const handleSignIn = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/Netflix/browse')
      })
      .catch((error) => {
        setEmail('')
        setPassword('')
        setErrors(error.message)
      })
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <UserForm>
          <UserForm.Title>Sign In</UserForm.Title>
          {errors && <UserForm.Errors>{errors}</UserForm.Errors>}
          <UserForm.Base onSubmit={handleSignIn}>
            <UserForm.Input placeholder="Email address" value={email} onChange={({ target }) => setEmail(target.value)} />
            <UserForm.Input type="password" placeholder="Password" autoComplete="off" value={password} onChange={({ target }) => setPassword(target.value)} />
            <UserForm.Button disabled={isInvalid} type="submit">
              Sign In
            </UserForm.Button>
          </UserForm.Base>
          <UserForm.Text>
            New to Netflix? <UserForm.Link to="/Netflix/signUp">Sign Up here</UserForm.Link>
          </UserForm.Text>
          <UserForm.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</UserForm.TextSmall>
        </UserForm>
      </Header>
      <NetflixFooter />
    </>
  )
}

export default SignIn
