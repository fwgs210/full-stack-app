import React from 'react'
import UserPortal from '../components/UserPortal'
import UserForm from '../components/UserForm'
import ChatBox from '../components/ChatBox'

const ChatRoom = ({ history }) => (
    <React.Fragment>
        <UserForm history={history} />
        <UserPortal history={history} />
        <ChatBox />
    </React.Fragment>
)

export default ChatRoom
