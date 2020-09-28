import React, { useState, useEffect } from 'react';
import Navbar from './HomePage/Navbar';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import CodePen from './CodePen/CodePen'


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/codePen" exact component={CodePen}/>
        </Switch>
      </Router>
    </>
  )
}
export default App;
