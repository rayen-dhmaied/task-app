import { List, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = () =>{
    const [forShow, setForShow] = useState('all')
    
    const showHandler = (event, nextView) =>{
      setForShow(nextView)
    }

    const tasks = useSelector(state => state.tasks.tasks)

    let tasksForShow = tasks

    if(forShow === 'done'){
      tasksForShow = tasks.filter(task => task.done === true)
    }else if(forShow === 'undone'){
      tasksForShow = tasks.filter(task => task.done === false)
    }
    
    return(<>
    <ToggleButtonGroup size='small'  sx={{marginLeft:2.45}} orientation="horizontal" value={forShow} onChange={showHandler} exclusive>
      <ToggleButton sx={{textTransform: 'none'}} value={'all'}>All</ToggleButton>
      <ToggleButton sx={{textTransform: 'none'}} value={'done'}>Done</ToggleButton>
      <ToggleButton sx={{textTransform: 'none'}} value={'undone'}>Undone</ToggleButton>
    </ToggleButtonGroup>
    {tasks.length === 0 && <p style={{position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>No tasks!</p>}
    {tasks.length > 0 && <List sx={{ marginLeft:0.7,height:'47vh', overflowY:'scroll', marginTop:1.5}}>
      {tasks.length > 0 && tasksForShow.map((task, index) => <TaskItem key={index} id={index} description={task.description} done={task.done} />)}
      </List>}
      </>)
}
 export default TaskList