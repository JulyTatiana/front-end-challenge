import React from 'react'

const RegisterEmployees = (props) => {
    const { addName, addLastName, onAddEmployee } = props

    return (
        <form className="form">
            <label className="label">Name</label>
            <input className="input-form" onChange={addName} type="text" name="name" />
            <label className="label">Last name</label>
            <input className="input-form" onChange={addLastName} type="text" name="lastName" />
            <button className="buttons" onClick={onAddEmployee}>Add employee</button>
        </form>
    )
}

export { RegisterEmployees }