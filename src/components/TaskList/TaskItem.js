import { ListItem, Checkbox, ListItemText, IconButton, Divider, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../../redux/slice'

const TaskItem = (props) =>{
  const dispatch = useDispatch()
  const description = useRef()
  const [editMode, setEditMode] = useState(false)

  const doneHandler = (event) =>{
    dispatch(updateTask({
      id : props.id,
      done : event.target.checked
    }))
  }

  const deleteHandler = () =>{
    dispatch(deleteTask({id: props.id}))
  }

  const editHandler = (event) =>{
    event.preventDefault()
    dispatch(updateTask({
      id : props.id,
      description : description.current.value
    }))
    setEditMode(false)
  }

  window.onkeyup = function(e) {
    if (e.key === 'Escape') setEditMode(false);
  }

  return(<>
    <ListItem>
      <Checkbox checked={props.done} onChange={doneHandler} edge="start"/>
      {!editMode && <ListItemText onDoubleClick={() => setEditMode(true)} id={props.id} primary={props.description}/>}
      {editMode && <form style={{width : '100%'}} onSubmit={editHandler}><TextField fullWidth size="small" variant="standard" defaultValue={props.description} inputRef={description} required /></form>}
      <IconButton onClick={deleteHandler}>
        <DeleteIcon/>
      </IconButton>
    </ListItem>
    <Divider  sx={{ marginLeft:2,marginRight:3.5}} light/>
  </>)
}

export default TaskItem