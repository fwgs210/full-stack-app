import React from 'react'
import UserPortal from '../components/UserPortal'
import UserForm from '../components/UserForm'
import Dashboard from '../components/Dashboard'

const UserDashboard = ({ history }) => (
    <React.Fragment>
        <UserForm history={history} />
        <UserPortal history={history} />
        <Dashboard history={history} />
    </React.Fragment>
)

export default UserDashboard
