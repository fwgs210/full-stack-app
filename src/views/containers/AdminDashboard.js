import React from 'react'
import styled from 'styled-components'
import ShowComments from '../components/ShowComment'
import AddComment from '../components/AddComment'
import UserPortal from '../components/UserPortal'
import Dashboard from '../components/Dashboard'
import UserForm from '../components/UserForm'

const NewPostContainer = styled.div`
  margin-top: 3rem;
`;

const AdminDashboard = ({ history }) => (
    <React.Fragment>
        <UserForm history={history} />
        <UserPortal history={history} />
        <Dashboard history={history} />
        <ShowComments />
        <NewPostContainer>
            <AddComment />
        </NewPostContainer>
    </React.Fragment>
)

export default AdminDashboard
