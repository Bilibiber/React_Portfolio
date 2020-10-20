import React, { useState } from "react";
import TodoForms from "./TodoForms";
import MenuBar from "./MenuBar";
import Todo from "./Todo";
import "./TodoList.css";
import SideNav from "./SideNav";

function TodoList() {
  return (
    <>
      <MenuBar />
      <div className="todoListContainer">
        <SideNav />
        <Todo />
      </div>
    </>
  );
}

export default TodoList;
