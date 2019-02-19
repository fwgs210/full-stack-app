import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux';

const ChatContainer = styled.div`
    margin-top: 3rem;
    height:600px;
    border: 3px solid #eee;
    overflow-y: scroll;
`
const Chat = styled.div`
    margin: .5rem 1rem 1.5rem;
    display: flex;
    align-items: flex-start;

    .profile {
        margin-right: 1rem
    }
    .message {
        margin: 0;
        font-size: .875rem;
    }
    .user {
        margin: 0 0 .375rem;
        font-weight: bold;
        font-size: .75rem;

        .time {
            font-weight: normal;
        }
    }
`

const ChatForm = styled.form`
    margin-top: .5rem;
    background: #fff;
    border: 3px solid #eee;

    input {
        outline: none;
        border: 0;
        width: 85%;
        box-sizing: border-box;
        padding: 12px 20px;
        color: rgba(0,0,0,0.6);
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        line-height: inherit;
        -webkit-transition: 0.3s ease;
        -webkit-transition: 0.3s ease;
        transition: 0.3s ease;
    }

    input::placeholder {
        color: rgba(0,0,0,0.3);
    }

    button {
        outline: none;
        background: #4285F4;
        width: 15%;
        border: 0;
        padding: 12px 20px;
        color: #FFFFFF;
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        line-height: inherit;
        text-transform: uppercase;
        cursor: pointer;
    }
`

class ChatBox extends Component {

  constructor(props) {
    super(props)

    this.loggedIn = props.loggedIn
    this.userRole = props.userRole
    this.loggedInAs = props.loggedInAs
    this.token = props.token
    this.loaded = props.loaded
    this.profileImg = props.profileImg
  }

  state = {
    chats: [],
    newChat: ''
  }

  loadChats = () => {
    axios.get('/api/all-chats').then(async res => {
      if (res.data.payload && res.status === 200) {
        this.setState({
            chats: res.data.payload
        })
      }
    })
  }

  newChat = e => {
    e.preventDefault()
    axios.post(`/api/newchat`, {
        chat: this.state.newChat
      }, {
          headers: { 'Authorization': 'bearer ' + this.token }
        }).then( res => {
            if(res.status === 201) {
                this.setState({newChat: '', chats: [ ...this.state.chats, res.data.payload ]})
            }
        })
  }

  handleChange = e => this.setState({newChat: e.target.value})

  convertDate = date => {
      const newDate = new Date(date)
      const hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()
      const min = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()
      return `${hours}:${min}`
  }

  componentWillReceiveProps(nextProps) {
    
    this.userRole = nextProps.userRole
    this.loggedInAs = nextProps.loggedInAs
    this.loggedIn = nextProps.loggedIn
    this.token = nextProps.token
    this.loaded = nextProps.loaded
    this.profileImg = nextProps.profileImg
  }

  componentDidMount() {
    this.loadChats()
  }

  render() {
    if (this.loggedIn) {
        return (
            <React.Fragment>
                <ChatContainer>
                    {this.state.chats.map(chat => (
                        <Chat key={chat._id}>
                            {chat.userId.profileImg && <img style={{ 'borderRadius': '100%' }} width="32" alt="Profile Image" className="profile" src={chat.userId.profileImg} />}
                            <aside>
                                <p className="user">{chat.userId.username} <span className="time">{this.convertDate(chat.date)}</span></p>
                                <p className="message">{chat.description}</p>
                            </aside>
                        </Chat>
                    ))}
                </ChatContainer>
                <ChatForm onSubmit={this.newChat}>
                    <input type="text" value={this.state.newChat} onChange={this.handleChange} placeholder="enter your message here..." />
                    <button type="submit">send</button>
                </ChatForm>
            </React.Fragment>
        )
    }
    return null
  }
}


const mapStateToProps = state => ({ ...state.get('user').toJS(), ...state.get('loading').toJS() })


export default connect(mapStateToProps)(ChatBox)
