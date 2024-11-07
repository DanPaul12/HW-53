import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'
import {Container} from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <Container>
      <HomePage />
      <ErrorPage />
    </Container>
  )
}

export default App
