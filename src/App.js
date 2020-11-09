import React from "react"
import "./App.css"
import "normalize.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./HomePage/Home"
import CodePen from "./CodePen/CodePen"
import TodoList from "./TodoList/TodoList"
import MuiNav from "./Mui-todo/MuiNav"
import Netflix from "./Netflix/pages/Netflix-home"

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
          <Redirect exact from="/MuiTodo" to="/MuiTodo/main" />
          <Route path="/MuiTodo/:page?" exact render={(props) => <MuiNav {...props} />} />
        </Switch>
      </Router>
    </>
  )
}
export default App
