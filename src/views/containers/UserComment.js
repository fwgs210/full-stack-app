import React from 'react'
import styled from 'styled-components'
import ShowComments from '../components/ShowComment'
import AddComment from '../components/AddComment'
import UserPortal from '../components/UserPortal'
import UserForm from '../components/UserForm'

const NewPostContainer = styled.div`
  margin-top: 3rem;
`;

const UserComment = () => (
    <React.Fragment>
        <UserForm />
        <UserPortal />
        <ShowComments />
        <NewPostContainer>
            <AddComment />
        </NewPostContainer>
    </React.Fragment>
)

export default UserComment
