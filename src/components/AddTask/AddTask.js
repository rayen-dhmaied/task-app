import { useRef, useState } from "react"
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/slice";

const AddTask = ()=>{
    const description = useRef();
    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch()

    const disabledHandler = ()=> {
        description.current.value.trim().length > 0 ? setDisabled(false) : setDisabled(true)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        dispatch(createTask({
            description : description.current.value
        }))
        description.current.value=''
        disabledHandler()
    }

    return(
        <form style={{marginLeft:20, marginRight:20, marginBottom:2, display:'block', textAlign:'right'}} onSubmit={submitHandler}>
            <TextField sx={{width:'100%'}} margin="normal" label="Description" size="medium" variant="standard" inputRef={description} onChange={disabledHandler} required />
            <Button type="submit" variant="contained" size='medium' disabled={disabled}>Save Task</Button>
        </form>)
}

export default AddTask