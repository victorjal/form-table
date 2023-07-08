import React from 'react'

function UserTable(props) {
  return (
    <table>
        <thead>
        <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
            {
                props.userList.map((user) => 
                <tr>
                    <td>{user.fullName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
  )
}

export default UserTable;