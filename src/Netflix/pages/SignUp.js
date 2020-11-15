import React, { useState, useContext } from 'react'
import { GlobalStyle } from '../Global-style'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../Context/firebase'
import NetflixFooter from '../Container/FooterContainer'
import Header from '../Container/HeaderContainer'
import UserForm from '../UserForm/UserForm'

function SignUp() {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [firstName, setName] = useState('')

  const handleSignUp = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push('/Netflix/browse')
          }),
      )
      .catch((error) => {
        setEmail('')
        setPassword('')
        setName('')
      })
  }
  const isInvalid = password === '' || email === '' || firstName === ''
  return (
    <>
      <GlobalStyle />
      <Header height='100vh'>
        <UserForm>
          <UserForm.Title>Sign Up</UserForm.Title>
          {errors && <UserForm.Errors>{errors}</UserForm.Errors>}
          <UserForm.Base onSubmit={handleSignUp}>
            <UserForm.Input placeholder='First Name' value={firstName} onChange={({ target }) => setName(target.value)} />
            <UserForm.Input placeholder='Email address' value={email} onChange={({ target }) => setEmail(target.value)} />
            <UserForm.Input type='password' placeholder='Password' autoComplete='off' value={password} onChange={({ target }) => setPassword(target.value)} />
            <UserForm.Button disabled={isInvalid} type='submit'>
              Sign Up
            </UserForm.Button>
          </UserForm.Base>
          <UserForm.Text>
            Already a member ? <UserForm.Link to='/Netflix/signIn'>Sign In here</UserForm.Link>
          </UserForm.Text>
          <UserForm.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</UserForm.TextSmall>
        </UserForm>
      </Header>
      <NetflixFooter />
    </>
  )
}

export default SignUp
