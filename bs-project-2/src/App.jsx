import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'
import {Container} from 'react-bootstrap'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element= {<HomePage/>}/>
      <Route path='*' element= {<ErrorPage/>}/>
    </Routes>
  )
}

export default App
