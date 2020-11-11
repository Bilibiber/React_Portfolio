import React from "react"
import "./App.css"
import "normalize.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./HomePage/Home"
import CodePen from "./CodePen/CodePen"
import TodoList from "./TodoList/TodoList"
import MuiNav from "./Mui-todo/MuiNav"
import Netflix from "./Netflix/pages/Netflix-home"
import NetflixSignIn from "./Netflix/pages/SignIn"
import NetflixSignUp from "./Netflix/pages/SignUp"
import NetflixBrowse from "./Netflix/pages/Browse"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/Netflix" />
          <Route path="/home" exact component={Home} />
          <Route path="/codePen" exact component={CodePen} />
          <Route path="/TodoList" exact component={TodoList} />
          <Route path="/Netflix" exact component={Netflix} />
          <Route path="/Netflix/signIn" exact component={NetflixSignIn} />
          <Route path="/Netflix/signUp" exact component={NetflixSignUp} />
          <Route path="/Netflix/browse" exact component={NetflixBrowse} />
          <Redirect exact from="/MuiTodo" to="/MuiTodo/main" />
          <Route path="/MuiTodo/:page?" exact render={(props) => <MuiNav {...props} />} />
        </Switch>
      </Router>
    </>
  )
}
export default App
