import React, { Component } from 'react'
import axios from 'axios'
import UserTable from './UserTable'
import { confirmPopUp } from '../../../utils/globalFunc'
import { connect } from 'react-redux';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.token = props.user.token
        this.userRole = props.user.userRole
        this.history = props.history
        this.users = props.admin.users

        this.editingUser = props.admin.editingUser
        this.editingUserId = props.admin.editingUserId
        this.editingUsername = props.admin.editingUsername
        this.editingEmail = props.admin.editingEmail
        this.editingProfileImg = props.admin.editingProfileImg
        this.editingRole = props.admin.editingRole
    }

    state = {
        users: [],
        editingUser: false,
        editingUserId: '',
        editingUsername: '', 
        editingEmail: '', 
        editingProfileImg: '', 
        editingRole: '' 
    }
    
    componentWillReceiveProps(nextProp) {
        this.token = nextProp.user.token
        this.userRole = nextProp.user.userRole
        this.users = nextProp.admin.users

        this.editingUser = nextProp.admin.editingUser
        this.editingUserId = nextProp.admin.editingUserId
        this.editingUsername = nextProp.admin.editingUsername
        this.editingEmail = nextProp.admin.editingEmail
        this.editingProfileImg = nextProp.admin.editingProfileImg
        this.editingRole = nextProp.admin.editingRole

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
                this.setState({ users: res.data.users})
            } else {
                console.log("error", res)
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

const mapStateToProps = state => state

export default connect(mapStateToProps)(Dashboard);
