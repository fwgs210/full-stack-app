import React from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { LineButton, InputGroup, InputLabel, InputField, InputButton } from '../../../utils/Input'

const UserTableContainer = styled.div`
    width:100%;
`

const TableContainer = styled.div`
    width:100%;
    overflow-x: auto;
`

const StyleTable = styled.table`
    width: 100%;
    display: table;
    border-spacing: 0;
    border-collapse: collapse;

    thead {
        display: table-header-group;
    }
    tbody {
        display: table-row-group;
    }
    tr {
        color: inherit;
        height: 48px;
        display: table-row;
        outline: none;
        vertical-align: middle;
    }
    td, th {
        display: table-cell;
        text-align: left;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        vertical-align: inherit;
        font-size: .875rem;
        padding: 0 5px;
    }
    th {
        font-weight: bold;
        font-size: 1rem;
    }
    
`

const FormContainer = styled.form`
    text-align: left;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 0 8px 2px rgba(65,64,66,.1);
    margin: 1.5rem 0;
    background-color: #fff;
`

const UserEditor = props => {

    const { editingUser,
        handleChange,
        updateUser,
        editingUsername,
        editingEmail,
        editingProfileImg,
        editingRole } = props

    const availableRoles = ['member', 'editor', 'administrator']

    if(editingUser) {
        return (
            <FormContainer onSubmit = { updateUser } >
                <InputGroup>
                    <InputLabel>User Role</InputLabel>
                    <Select style={{'padding-left': '16px'}} value={editingRole} onChange={(e) => handleChange('editingRole', e.target.value)}>
                        {
                            availableRoles.map(each => <MenuItem value={each} key={each}>{each}</MenuItem>)
                        }
                    </Select>
                </InputGroup>
                <InputGroup>
                    <InputLabel>Username</InputLabel>
                    <InputField value={editingUsername} onChange={(e) => handleChange('editingUsername', e.target.value)} type="text" required />
                </InputGroup>
                <InputGroup>
                    <InputLabel>User Email</InputLabel>
                    <InputField value={editingEmail} onChange={(e) => handleChange('editingEmail', e.target.value)} type="email" required />
                </InputGroup>
                <InputGroup>
                    <InputLabel>User Profile Image</InputLabel>
                    <InputField value={editingProfileImg} onChange={(e) => handleChange('editingProfileImg', e.target.value)} type="text" required />
                </InputGroup>
                <InputGroup>
                    <InputButton type="submit">Update User</InputButton>
                    <LineButton onClick={() => handleChange('editingUser', false)}>Cancel</LineButton>
                </InputGroup>
            </FormContainer >
        )
    }
    return null
}

const UserTable = props => {
    const { users, editingUser,
            editingUsername,
            editingEmail,
            editingProfileImg,
            editingRole } = props.state

    const { handleChange, updateUser, deleteUser } = props

    return (
        <UserTableContainer>
            <UserEditor 
                editingUser={editingUser}
                editingUsername={editingUsername}
                editingEmail={editingEmail}
                editingProfileImg={editingProfileImg}
                editingRole={editingRole}
                handleChange={handleChange}
                updateUser={updateUser}
            />
            <TableContainer>
                <StyleTable>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map(user => (
                            <tr key={user._id}>
                                <td>
                                    <img src={user.profileImg} width="32" alt="avatar" />
                                </td>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <td>
                                    <LineButton style={{'display': 'inline'}} onClick={() => {
                                        handleChange('editingUser', true)
                                        handleChange('editingUserId', user._id)
                                        handleChange('editingUsername', user.username)
                                        handleChange('editingEmail', user.email)
                                        handleChange('editingProfileImg', user.profileImg)
                                        handleChange('editingRole', user.role)
                                        }}>
                                        Edit
                                    </LineButton>
                                </td>
                                <td>
                                    <LineButton style={{ 'display': 'inline' }} onClick={() => {
                                        deleteUser(user._id)
                                    }}>
                                        Delete
                                    </LineButton>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </StyleTable>
            </TableContainer>
        </UserTableContainer>
    )
}
export default UserTable
