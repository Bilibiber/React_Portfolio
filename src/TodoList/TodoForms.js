import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import './TodoForms.css'
import { makeStyles } from '@material-ui/core/styles'
import { FormGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import useForm from '../Shared/useForm'

const initialValues = {
  Description: '',
  Details: '',
  DueTime: now,
  RemindMe: false,
  IsCompleted: false,
}

function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}
var TodoArray = []
var today = new Date()
var now = `${today.getFullYear()}-${addZero(today.getMonth() + 1)}-${addZero(today.getDate())}T${addZero(today.getHours())}:${addZero(today.getMinutes())}`

function TodoForms() {
  const useStyle = makeStyles((theme) => ({
    space: {
      marginTop: theme.spacing(1),
    },
  }))

  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const [Remind, setRemind] = useState(false)
  const [SelectOpen, setSelectOpen] = useState(false)

  const { values, setValues, handleInputChange } = useForm(initialValues)

  const handleRemind = () => {
    setRemind(!Remind)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(!open)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setOpen(!open)
    TodoArray[TodoArray.length] = values
    console.log(TodoArray)
  }

  const TodoList = TodoArray.map((TodoArray) => (
    <h1 className="todoList" key={TodoArray.Description}>
      {TodoArray.Description}
    </h1>
  ))

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add a Task
      </Button>
      <div> {TodoList} </div>

      <form>
        <Dialog maxWidth="md" fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a task</DialogTitle>
          <DialogContent>
            <TextField margin="dense" name="Description" label="What's to do?" type="text" onChange={handleInputChange} value={values.Description} fullWidth />
            <TextField
              name="DueTime"
              label="DueTime"
              type="datetime-local"
              defaultValue={now}
              onChange={handleInputChange}
              className={classes.space}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField name="Details" label="Details" multiline onChange={handleInputChange} className={classes.space} variant="filled" value={values.Details} fullWidth />
            <FormGroup row>
              <FormControlLabel control={<Checkbox checked={Remind} onChange={handleRemind} name="RemindMe" color="primary" />} label="Remind Me" />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleFormSubmit} color="primary" type="submit">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  )
}

export default TodoForms
