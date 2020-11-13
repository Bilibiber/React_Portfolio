import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD8ytoUGW2osWDRcXpeixMaUBwv57UPj48',
  authDomain: 'my-profile-f6c7c.firebaseapp.com',
  databaseURL: 'https://my-profile-f6c7c.firebaseio.com',
  projectId: 'my-profile-f6c7c',
  storageBucket: 'my-profile-f6c7c.appspot.com',
  messagingSenderId: '660435455017',
  appId: '1:660435455017:web:9f1425c4808408fe9d2038',
  measurementId: 'G-1WKR37KWCW',
}

const firebase = Firebase.initializeApp(config)

//seedDatabase(firebase)

export { firebase }
