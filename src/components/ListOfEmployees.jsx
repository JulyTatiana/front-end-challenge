import React, { useState } from 'react'

import { RegisterEmployees } from './RegisterEmployees';
import { EmployeesTable } from './EmployeesTable';

const ListOfEmployees = () => {

  const onAddEmployee = (event) => {
    event.preventDefault();
    if (name && lastName) {
      const employee = {
        name,
        lastName
      }
      setList([...list, employee])
    }
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');

  const [lastName, setLastName] = useState('');

  const addName = (event) => {
    setName(event.target.value)
  }

  const addLastName = (event) => {
    setLastName(event.target.value)
  }

  return (
    <div className="container">
      <div className="row">
        <RegisterEmployees
          addName={addName}
          addLastName={addLastName}
          onAddEmployee={onAddEmployee} />
      </div>

      <div className="row">
        <EmployeesTable list={list} setList={setList} />
      </div>

    </div >
  )
}

export default ListOfEmployees