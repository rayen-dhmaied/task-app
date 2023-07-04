import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import store from './redux/store'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9D3C72',
    }
  },
  typography: {
    fontFamily: 'Josefin Sans , sans-serif'
  }
})

export default function App(){
    return(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AddTask/>
          <TaskList/>
        </ThemeProvider>
      </Provider>)
}