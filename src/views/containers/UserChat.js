import React from 'react'
import UserPortal from '../components/UserPortal'
import UserForm from '../components/UserForm'
import ChatBox from '../components/ChatBox'

const AdminDashboard = () => (
    <React.Fragment>
        <UserForm />
        <UserPortal />
        <ChatBox />
    </React.Fragment>
)

export default AdminDashboard
