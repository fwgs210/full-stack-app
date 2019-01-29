import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import UserTable from './UserTable'
import { confirmPopUp } from '../../../utils/globalFunc'
import { connect } from 'react-redux';
import { loadUsers } from './actions'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserApp = styled.section`
    display: flex;
    flex-wrap: wrap;
    min-height: 400px;
    padding: 2rem 0;
    box-sizing: border-box;

    .app {
        box-shadow: 0 3px 3px 0 rgba(203,203,203,0.5);
        width: 32%;
        margin: calc(4% / 6);
        height: 8rem;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #F0F0F0;
        text-decoration: none;
        color: #333;

        &:hover {
            box-shadow: 0 3px 30px 0 rgba(203,203,203,1);
        }
    }
    .app-icon {
        font-size: 2.5rem;
        color: #4285F4;
        margin-bottom: 10px;
    }
`

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.token = props.user.token
        this.userRole = props.user.userRole
        this.history = props.history
        this.users = props.admin.users
        this.loggedInAs = props.user.loggedInAs
    }

    state = {
        editingUser: false,
        editingUserId: '',
        editingUsername: '', 
        editingEmail: '', 
        editingProfileImg: '', 
        editingRole: '' 
    }
    
    componentWillReceiveProps(nextProps) {
        this.token = nextProps.user.token
        this.userRole = nextProps.user.userRole
        this.users = nextProps.admin.users
        this.loggedInAs = nextProps.user.loggedInAs

        if (this.userRole === 'administrator' && this.token) {
            this.loadUsers()
        }
    }

    handleChange = (nameToUpdate, value) => {
        this.setState({
            [nameToUpdate]: value
        })
    }

    clearInput = () => {
        this.setState({
            editingUser: false,
            editingUserId: '',
            editingUsername: '',
            editingEmail: '',
            editingProfileImg: '',
            editingRole: ''
        })
    }

    updateUser = (e) => {
        e.preventDefault();
        axios.put(`/api/users/${this.state.editingUserId}`, {
            username: this.state.editingUsername, 
            email: this.state.editingEmail, 
            profileImg: this.state.editingProfileImg, 
            role: this.state.editingRole
        }, {
            headers: { 'Authorization': 'bearer ' + this.token }
        }).then(res => {
            if (res.status === 200) {
                this.clearInput()
                window.alert(res.data.message)
                this.loadUsers()
            } else {
                console.log("error", res)
            }
        })
    }

    deleteUser = (UserId) => {
        if (confirmPopUp("Are you sure?")) {
            axios.delete(`/api/users/${UserId}`, {
                headers: { 'Authorization': 'bearer ' + this.token }
            }).then(res => {
                if (res.status === 200) {
                    window.alert(res.data.message)
                    this.loadUsers()
                } else {
                    console.log("error", res)
                }
            })
        }
    }
    

    loadUsers = () => {
        axios.get('/api/users', {
            headers: { 'Authorization': 'bearer ' + this.token }
        }).then(res => {
            if (res.status === 200) {
                // this.setState({ users: res.data.users})
                this.props.dispatch(loadUsers(res.data.users))
            } else {
                console.log("error", res)
            }
        })
    }

    render() {
        
        if (this.userRole === 'administrator') {
            return (
                <article>
                    <UserTable state={this.state} users={this.users} handleChange={this.handleChange} updateUser={this.updateUser} deleteUser={this.deleteUser} />
                </article>
            );
        }
        if (this.userRole !== '') {
            return (
                <UserApp>
                    <Link to="/user/comments" replace className="app">
                        <FontAwesomeIcon prefix="fas" icon="edit" className="app-icon" />
                        Comments Board
                    </Link>
                    <Link to="/user/chatroom" replace className="app">
                        <FontAwesomeIcon prefix="far" icon="comments" className="app-icon" />
                        Chatroom
                    </Link>
                </UserApp>
            )
        }
        return null
    }


};

const mapStateToProps = state => state

export default connect(mapStateToProps)(Dashboard);
