import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks : JSON.parse(localStorage.tasks || "[]")
  },
  reducers: {
    createTask: (state, action) => {
      state.tasks.push({description : action.payload.description, done : false })
      localStorage.tasks = JSON.stringify(state.tasks)
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload.id,1)
      localStorage.tasks = JSON.stringify(state.tasks)
    },
    updateTask: (state, action) => {
      if (action.payload.done !== undefined) {
        state.tasks[action.payload.id] = {...state.tasks[action.payload.id] , done : action.payload.done }
      }else if(action.payload.description !== undefined){
        state.tasks[action.payload.id] = {...state.tasks[action.payload.id] , description : action.payload.description }
      }
      localStorage.tasks = JSON.stringify(state.tasks)
    },
  },
})

export const { createTask, deleteTask, updateTask } = taskSlice.actions

export default taskSlice.reducer