import React from 'react';
import './App.css';
import Greet from './components/Greet';
import  Welcome  from './components/Welcome';
import HOC from './components/HOC';
import Message from './components/Message';
import Counter from './components/Counter';
import SuperHero from './components/SuperHero';
import ParentComponent from './components/parentComponent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
{/*       <Counter></Counter>
     <SuperHero Name="Bruce" HeroName="BatMan"></SuperHero> */}

    {/*  <ParentComponent></ParentComponent> */}
    {/* <UserGreet></UserGreet> */}
  {/*   <NameList></NameList> */}
  <Form fan="FanGuo"></Form>
    </div>
  );
}
export default App;
