import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./HomePage/Home"
import CodePen from "./CodePen/CodePen"
import TodoList from "./TodoList/TodoList"
import MuiNav from "./Mui-todo/MuiNav"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/codePen" exact component={CodePen} />
          <Route path="/TodoList" exact component={TodoList} />
          <Redirect exact from="/MuiTodo" to="/MuiTodo/main" />
          <Route path="/MuiTodo/:page?" exact render={(props) => <MuiNav {...props} />} />
        </Switch>
      </Router>
    </>
  )
}
export default App
