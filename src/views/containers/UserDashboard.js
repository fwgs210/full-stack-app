import React from 'react'
import UserPortal from '../components/UserPortal'
import UserForm from '../components/UserForm'
import Dashboard from '../components/Dashboard'

const UserDashboard = () => (
    <React.Fragment>
        <UserForm />
        <UserPortal />
        <Dashboard />
    </React.Fragment>
)

export default UserDashboard
