import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { firebase } from './Netflix/lib/firebase.prod'
import { FirebaseContext } from './Netflix/Context/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,

  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
