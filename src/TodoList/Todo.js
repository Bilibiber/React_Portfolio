import { IconButton, makeStyles, TextField } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import AddIcon from "@material-ui/icons/Add"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import React, { useState } from "react"
import { useFormik } from "formik"
import "./Todo.css"

var localTodoList = []
const todoList = []
function Todo() {
  const ToDoForm = useFormik({
    initialValues: {
      id: 0,
      todo: "",
      dueTime: "",
      remindMe: false,
      myDay: false,
      important: false,
      completed: false,
    },
    onSubmit: (values) => {
      values.id = Math.floor(Math.random() * 10000)
      todoList.push(ToDoForm.values)
      localStorage.setItem("todo", JSON.stringify(todoList))
      ToDoForm.resetForm()
    },
  })

  const useStyles = makeStyles({
    underline: {
      "&:before": {
        borderBottom: "none",
      },
    },
    haveBorder: {
      borderBottom: "2px solid #3f51b5",
      borderRadius: "0px",
    },
    buttonText: {
      font: "16px bold",
      display: "flex",
      justifyContent: "left",
      textTransform: "initial",
    },
  })

  if (localStorage.getItem("todo") !== null) {
    localTodoList = JSON.parse(localStorage.getItem("todo"))
  }
  const [focused, setFocus] = useState(false)
  const [addBtn, setBtn] = useState(false)
  const classes = useStyles()
  const handleFocus = () => {
    setFocus(!focused)
  }
  const handleInput = (e) => {
    if (e.target.value !== "") {
      setBtn(true)
    } else setBtn(false)
  }

  const handleDelete = (e) => {
    var id = e.target.name
    var rowToRemove = document.getElementById(id)
    if (rowToRemove !== null) rowToRemove.style.display = "none"
    else alert("Try Again")
  }
  return (
    <>
      <div className="mainSection">
        <div className="content">
          <div className="toolBar">
            <div className="toolBarTitle">
              <h2>Tasks</h2>
            </div>
          </div>
          <div className="formSection">
            <div className="addToTask">
              <IconButton onClick={handleFocus}>
                {focused ? <RadioButtonUncheckedIcon /> : <AddIcon />}
              </IconButton>
              <TextField
                fullWidth
                name="todo"
                id="todo"
                type="text"
                value={ToDoForm.values.todo}
                placeholder="WHAT'S TO DO ?"
                onBlur={handleFocus}
                onFocus={handleFocus}
                onInput={handleInput}
                onChange={ToDoForm.handleChange}
                InputProps={{
                  classes: { underline: classes.underline },
                }}
              ></TextField>
              {addBtn ? (
                <Button
                  color="primary"
                  className={classes.haveBorder}
                  type="submit"
                  onClick={ToDoForm.handleSubmit}
                >
                  Add
                </Button>
              ) : (
                ""
              )}
            </div>
            {
              <div className="tasks">
                {localTodoList.map((todo, index) => {
                  return (
                    <div key={index} id={todo.id} className="tasksItem">
                      <IconButton>
                        <RadioButtonUncheckedIcon />
                      </IconButton>
                      <Button
                        fullWidth
                        className={classes.buttonText}
                        onClick={handleDelete}
                        name={todo.id}
                      >
                        {todo.todo}
                      </Button>
                      <IconButton>
                        <StarBorderOutlinedIcon />
                      </IconButton>
                    </div>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
