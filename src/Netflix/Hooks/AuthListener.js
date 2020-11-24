import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../Context/firebase';
import {useDispatch} from 'react-redux';
import {LogIn, LogOut} from '../../PlayGround/actions';

export default function useAuthListener() {
  //check if user in LocalStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const {firebase} = useContext(FirebaseContext);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('authListener called');
    const listener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(LogIn());
        localStorage.setItem('authUser', JSON.stringify(user));
        setUser(user);
      } else {
        dispatch(LogOut());
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return {user};
}
