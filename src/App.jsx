import logo from './logo.svg'
import './App.css'
import './styles.css'
import ListOfStudents from './components/ListOfStudents'
import ListOfEmployees from './components/ListOfEmployees'

function App() {

  return (
    
    <div className="main-div">
      <h1 style={{backgroundColor: "gray", display: 'flex'}}> &nbsp;Entry Record</h1>
      <h2>Employees</h2>
      <ListOfEmployees />
      <h2>Students</h2>
      <ListOfStudents />
    </div>
  )
}

export default App