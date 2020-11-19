import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { firebase } from './Netflix/lib/firebase.prod'
import { FirebaseContext } from './Netflix/Context/firebase'
import { createStore } from 'redux'
import allReducers from './PlayGround/reducer/Index'
import { Provider } from 'react-redux'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
