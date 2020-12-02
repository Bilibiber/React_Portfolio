import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomePage/Home';
import CodePen from './CodePen/CodePen';
import Netflix from './Netflix/pages/Netflix-home';
import NetflixSignIn from './Netflix/pages/SignIn';
import NetflixSignUp from './Netflix/pages/SignUp';
import NetflixBrowse from './Netflix/pages/Browse';
import About from './HomePage/about';
import MyShop from './myShop/pages/home';
import {IsUserRedirect, ProtectedRoute} from './Netflix/Auth/AuthRoute';
import useAuthListener from './Netflix/Hooks/AuthListener';
import PlayGround from './PlayGround/Redux';
import TodoList from './TodoList/TodoList';
import Pokemon from './Pokemon/PokemonIndex';
import './App.css';
import 'normalize.css';

function App() {
  const {user} = useAuthListener();

  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route path='/about' exact component={About} />
          <Route path='/home' exact component={Home} />
          <Route path='/codePen' exact component={CodePen} />
          <Route path='/redux' exact component={PlayGround} />
          <Route path='/TodoList' exact component={TodoList} />
          <Route path='/pokemon' exact component={Pokemon} />
          <Route path='/myshop' exact component={MyShop} />
          <IsUserRedirect
            user={user}
            loggedInPath='/Netflix/browse'
            path='/Netflix'
            exact
          >
            <Netflix />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath='/Netflix/browse'
            path='/Netflix/signIn'
            exact
          >
            <NetflixSignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath='/Netflix/browse'
            path='/Netflix/signUp'
            exact
          >
            <NetflixSignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path='/Netflix/browse' exact>
            <NetflixBrowse />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
}
export default App;
