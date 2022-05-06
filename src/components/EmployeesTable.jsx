import React from 'react'

const EmployeesTable = (props) => {
  const { list, setList } = props

  const deleteEmployee = (event, index) => {
    event.preventDefault()
    let filteredList = list.filter((value, ind) => ind !== index)
    setList(filteredList)
  }

  return (
    <div>
      <table id="table" className="table">
        <thead className={list.length > 0 ? "" : "hidden"}>
          <tr key="theader"><th>Name</th><th>Last name</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {list.map((employee, index) => <tr id={`tr-${index}`} key={index}>
            <td>{employee.name}</td>
            <td>{employee.lastName}</td>
            <td>
              <button className="delete-button"
                onClick={(e) => { deleteEmployee(e, index) }}
                type="button">✖</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export { EmployeesTable }