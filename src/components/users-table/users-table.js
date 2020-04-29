import React from 'react';
import './users-table.css';

const UsersTable = (props) => {
console.log('usersprops', props)

const users = props.users.map(user => {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address? user.address.city : ''}</td>
            <td><button type="button" className="btn btn-warning" onClick={() => props.openAdd(user.id)}>Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => props.openDelete(user.id)}>Delete</button></td>
        </tr>
    )
})

    return (
        <div className="card table-container ">
        <div className="add-user-panel"><div><h4>User List</h4></div><div><button type="button" className="btn btn-primary add-btn" onClick={() => props.openAdd()}>Add New</button></div></div>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {users}
            </tbody>
        </table>
        </div>
    )

}

export default UsersTable;