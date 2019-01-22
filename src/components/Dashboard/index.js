import React, { Component } from 'react'
import axios from 'axios'
import UserTable from './UserTable'
import { confirmPopUp } from '../../utils/globalFunc'

class Dashboard extends Component {

    constructor(props) {
        super();
        this.token = props.token
        this.userRole = props.userRole
    }

    state = {
        users: [],
        comments: [],
        editingUser: false,
        editingUserId: '',
        editingUsername: '', 
        editingEmail: '', 
        editingProfileImg: '', 
        editingRole: '' 
    }
    
    componentWillReceiveProps(nextProp) {
        this.token = nextProp.token
        this.userRole = nextProp.userRole
        this.users = nextProp.users
        this.comments = nextProp.comments
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userRole !== this.props.userRole && this.props.userRole === 'administrator' && this.props.token) {
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
            if (res.data.users && res.status === 200) {
                this.setState({ users: res.data.users})
            }
        })
    }

    render() {
        
        if (this.userRole === 'administrator') {
            return (
                <article>
                    <UserTable state={this.state} handleChange={this.handleChange} updateUser={this.updateUser} deleteUser={this.deleteUser} />
                </article>
            );
        }
        return null
    }


};

export default Dashboard;
