import React from 'react'
import './App.css'
import 'normalize.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './HomePage/Home'
import CodePen from './CodePen/CodePen'
import TodoList from './TodoList/TodoList'
import MuiNav from './Mui-todo/MuiNav'
import Netflix from './Netflix/pages/Netflix-home'
import NetflixSignIn from './Netflix/pages/SignIn'
import NetflixSignUp from './Netflix/pages/SignUp'
import NetflixBrowse from './Netflix/pages/Browse'
import { IsUserRedirect, ProtectedRoute } from './Netflix/Auth/AuthRoute'
function App() {
  const user = null
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/Netflix" />
          <Route path="/home" exact component={Home} />
          <Route path="/codePen" exact component={CodePen} />
          <Route path="/TodoList" exact component={TodoList} />

          <IsUserRedirect user={user} loggedInPath="/Netflix/browse" path="/Netflix" exact>
            <Netflix />
          </IsUserRedirect>

          <IsUserRedirect user={user} loggedInPath="/Netflix/browse" path="/Netflix/signIn" exact>
            <NetflixSignIn />
          </IsUserRedirect>

          <IsUserRedirect user={user} loggedInPath="/Netflix/browse" path="/Netflix/signUp" exact>
            <NetflixSignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path="/Netflix/browse" exact>
            <NetflixBrowse />
          </ProtectedRoute>

          <Redirect exact from="/MuiTodo" to="/MuiTodo/main" />
          <Route path="/MuiTodo/:page?" exact render={(props) => <MuiNav {...props} />} />
        </Switch>
      </Router>
    </>
  )
}
export default App
