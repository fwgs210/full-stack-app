import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Router from 'next/router'
import {
    InputGroup,
    InputLabel,
    InputField,
    InputButton,
    LineButton
} from '../../../utils/Input'
import { connect } from 'react-redux';
import {
    login,
    logout,
    typeUsername,
    typePassword,
    typeConfirmPassword,
    typeEmail,
    chooseProfile,
    setRegistering,
    setForgetPass
} from './actions'
import { loadComments } from '../ShowComment/actions';
import { setError, startLoading, finishLoading, clearError, clearInput } from '../../../controllers/Actions'
import { stripSpaces, validatePassword, validateEmail } from '../../../utils/globalFunc'

const UserLogin = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 40px auto 0;
`;

const RadioOption = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
  align-items: center;

  [type="radio"] {
      margin-top: .5rem;
  }

  img {
      width: 48px;
  }
`;

const ErrorMessage = styled.div`
  color: #D31C1D;
  text-align: center;
  font-size: .875rem;
`;

class UserForm extends Component {

    constructor(props) {
        super(props)
        //function
        this.login = props.login
        this.logout = props.logout
        this.clearInput = props.clearInput
        this.setError = props.setError
        this.clearError = props.clearError
        this.loadingStart = props.loadingStart
        this.loadingEnd = props.loadingEnd
        this.typeUsername = props.typeUsername
        this.typePassword = props.typePassword
        this.typeConfirmPassword = props.typeConfirmPassword
        this.typeEmail = props.typeEmail
        this.chooseProfile = props.chooseProfile
        this.setRegistering = props.setRegistering
        this.setForgetPass = props.setForgetPass
        this.loadComments = props.loadComments

        //data
        this.forgetPass = props.forgetPass
        this.registering = props.registering
        this.username = props.username
        this.email = props.email
        this.password = props.password
        this.rePassword = props.rePassword
        // this.token = props.token
        this.profileImg = props.profileImg
        this.loggedInAs = props.loggedInAs
        this.loggedIn = props.loggedIn
        this.userRole = props.userRole
        this.loaded = props.loaded
        this.errorMessage = props.errorMessage
    }

    sessionLogin = () => {
        this.loadingStart();
        const token = window.sessionStorage['token']
        axios.post('/api/login/sso', {}, {
            headers: { 'Authorization': 'bearer ' + token }
        }).then(async res => {
            if (res.status === 200) {
                const { _id, profileImg, role, username } = res.data.user
                await this.login({
                    username,
                    loggedInAs: _id,
                    token,
                    profileImg,
                    userRole: role
                })
                this.loadAllComments()
                this.clearInput()
                this.loadingEnd()
                role === 'administrator' ? Router.push('/admin', `/admin/${_id}`) : Router.push(`/user`, `/user/${_id}`)
            } else {
                this.setError(res.data.message)
                this.loadingEnd()
            }
        })
    }

    userLogin = e => {
        e.preventDefault();
        axios.post('/api/login', {
            username: stripSpaces(this.username),
            password: stripSpaces(this.password)
        }).then(async res => {
            if (res.status === 200) {
                const { _id, profileImg, role, username } = res.data.user
                window.sessionStorage.setItem('token', res.data.token);
                await this.login({
                    username,
                    loggedInAs: _id,
                    token: res.data.token,
                    profileImg,
                    userRole: role
                })
                this.loadAllComments()
                this.clearInput()
                this.clearError()
                role === 'administrator' ? Router.push('/admin', `/admin/${_id}`) : Router.push(`/user`, `/user/${_id}`)
            } else {
                this.setError(res.data.message)
            }
        })
    }

    createNewUser = e => {
        e.preventDefault()
        if (this.password !== this.rePassword) {
            this.setError(`You passwords don't match`)
            return null
        }
        if (!validatePassword(this.password)) {
            this.setError(`Please make sure your password has uppercase, lowercase letter, number, special character and no space.`)
            return null
        }
        if (!validateEmail(this.email)) {
            this.setError(`this email address ${this.email} is not valid.`)
            return null
        }
        this.loadingStart()
        axios.post('/api/newuser', {
            username: stripSpaces(this.username),
            email: stripSpaces(this.email),
            password: stripSpaces(this.password),
            profileImg: this.profileImg
        }).then(async res => {
            if (res.status === 200) {
                const { _id, role, profileImg } = res.data.user
                await this.login({
                    loggedInAs: _id,
                    token: res.data.token,
                    profileImg,
                    userRole: role
                })
                this.loadAllComments()
                window.sessionStorage.setItem('token', res.data.token);
                this.clearInput()
                this.clearError()
                this.loadingEnd()
                Router.push(`/userdashboard?userId=${_id}`, `/user/${_id}`)
            } else {
                this.setError(res.data.message)
                this.loadingEnd()
            }
        })
    }


    forgetPassRequest = e => {
        e.preventDefault()
        this.loadingStart()
        axios.post('/api/retrieve-user-info', {
            email: stripSpaces(this.email)
        }).then(res => {
            if (res.status === 200) {
                this.setError(res.data.message)
                this.clearInput()
                this.loadingEnd()
            }
            if (res.status === 203) {
                this.setError(res.data.message)
                this.loadingEnd()
            }
        })
    }

    loadAllComments = () => {
        this.loadingStart();
        axios.get('/api/all-comments').then(async res => {
            if (res.data.payload && res.status === 200) {
                await this.loadComments(res.data.payload)
            }
            else {
                this.setError('Server Error')
                this.loadingEnd()
            }
        })       
    }

    componentDidMount() {
        if (window.sessionStorage['token']) {
            this.sessionLogin()
        }
        console.log('mounted')
    }
    

    componentWillReceiveProps(nextProps) {

        this.forgetPass = nextProps.forgetPass
        this.registering = nextProps.registering
        this.username = nextProps.username
        this.email = nextProps.email
        this.password = nextProps.password
        this.rePassword = nextProps.rePassword
        // this.token = nextProps.token
        this.profileImg = nextProps.profileImg
        this.loggedInAs = nextProps.loggedInAs
        this.loggedIn = nextProps.loggedIn 
        this.userRole = nextProps.userRole
        this.loaded = nextProps.loaded
        this.errorMessage = nextProps.errorMessage
    }


    render() {

        if (this.registering) {
            return (
                <React.Fragment>
                    <UserLogin>
                        <form onSubmit={e => this.createNewUser(e)}>
                            <InputGroup>
                                <InputLabel>choose your avatar</InputLabel>
                                <RadioOption><img alt="avatar1" src='/assets/images/avatar-default.png' /><input type="radio" name="selectMyAvatar" onChange={() => this.chooseProfile('/static/assets/images/avatar-default.png')} /></RadioOption>
                                <RadioOption><img alt="avatar2" src='/assets/images/avatar-yellow.png' /><input type="radio" name="selectMyAvatar" onChange={() => this.chooseProfile('/static/assets/images/avatar-yellow.png')} /></RadioOption>
                                <RadioOption><img alt="avatar3" src='/assets/images/avatar-glasses-1.png' /><input type="radio" name="selectMyAvatar" onChange={() => this.chooseProfile('/static/assets/images/avatar-glasses-1.png')} /></RadioOption>
                                <RadioOption><img alt="avatar4" src='/assets/images/avatar-glasses-2.png' /><input type="radio" name="selectMyAvatar" onChange={() => this.chooseProfile('/static/assets/images/avatar-glasses-2.png')} /></RadioOption>
                                <RadioOption><img alt="avatar5" src='/assets/images/avatar-beared.png' /><input type="radio" name="selectMyAvatar" onChange={() => this.chooseProfile('/static/assets/images/avatar-beared.png')} /></RadioOption>
                                <RadioOption><img alt="avatar6" src='/assets/images/avatar-brown.png' /><input type="radio" name="selectMyAvatar" onChange={() => this.chooseProfile('/static/assets/images/avatar-brown.png')} /></RadioOption>
                            </InputGroup>
                            <InputGroup>
                                <InputLabel>username</InputLabel>
                                <InputField value={this.username} onChange={this.typeUsername} type="text" required />
                            </InputGroup>
                            <InputGroup>
                                <InputLabel>email</InputLabel>
                                <InputField value={this.email} onChange={this.typeEmail} type="email" required />
                            </InputGroup>
                            <InputGroup>
                                <InputLabel>password</InputLabel>
                                <InputField value={this.password} onChange={this.typePassword} type="password" required />
                            </InputGroup>
                            <InputGroup>
                                <InputLabel>Re-type password</InputLabel>
                                <InputField value={this.rePassword} onChange={this.typeConfirmPassword} type="password" required />
                            </InputGroup>
                            <InputGroup>
                                <InputButton type="submit">Register</InputButton>
                                <LineButton onClick={() => this.setRegistering(false)}>Login</LineButton>
                            </InputGroup>
                        </form>
                    </UserLogin>
                    <ErrorMessage>{this.errorMessage}</ErrorMessage>
                </React.Fragment>
            )
        }

        if (this.forgetPass) {
            return (
                <React.Fragment>
                    <UserLogin>
                        <form onSubmit={(e) => this.forgetPassRequest(e)}>
                            <InputGroup>
                                <InputLabel>email</InputLabel>
                                <InputField value={this.email} onChange={this.typeEmail} type="email" required />
                            </InputGroup>
                            <InputGroup>
                                <InputButton type="submit">Submit</InputButton>
                                <LineButton onClick={() => this.setForgetPass(false)}>Login</LineButton>
                            </InputGroup>
                        </form>
                    </UserLogin>
                    <ErrorMessage>{this.errorMessage}</ErrorMessage>
                </React.Fragment>            
            )
        }

        if(!this.loggedIn) {
            return (
                <React.Fragment>
                    <UserLogin>
                        <form onSubmit={e => this.userLogin(e)}>
                            <InputGroup>
                                <InputLabel>username</InputLabel>
                                <InputField value={this.username} onChange={this.typeUsername} type="text" required />
                            </InputGroup>
                            <InputGroup>
                                <InputLabel>password</InputLabel>
                                <InputField value={this.password} onChange={this.typePassword} type="password" required />
                            </InputGroup>
                            <InputGroup>
                                <InputButton type="submit">login</InputButton>
                                <LineButton onClick={() => this.setRegistering(true)}>Register here</LineButton>
                                <LineButton onClick={() => this.setForgetPass(true)}>forgot password?</LineButton>
                            </InputGroup>
                        </form>
                    </UserLogin>
                    <ErrorMessage>{this.errorMessage}</ErrorMessage>
                </React.Fragment>
            )
        }

        return null
    }
}

const mapStateToProps = state => ({ ...state.user, ...state.loading })
//this method is used to pass state down functions

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
    login: userData => dispatch(login(userData)),
    logout: () => dispatch(logout()),
    loadComments: allComments => dispatch(loadComments(allComments)),
    typeUsername: username => dispatch(typeUsername(username)),
    typePassword: password => dispatch(typePassword(password)),
    typeConfirmPassword: rePassword => dispatch(typeConfirmPassword(rePassword)),
    typeEmail: email => dispatch(typeEmail(email)),
    chooseProfile: profileImg => dispatch(chooseProfile(profileImg)),
    clearInput: () => dispatch(clearInput()),
    setError: errorMessage => dispatch(setError(errorMessage)),
    clearError: () => dispatch(clearError()),
    loadingStart: () => dispatch(startLoading()),
    loadingEnd: () => dispatch(finishLoading()),
    setRegistering: bool => dispatch(setRegistering(bool)), 
    setForgetPass: bool => dispatch(setForgetPass(bool))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserForm)