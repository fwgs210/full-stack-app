import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ShowComments from './ShowComment'
import AddComment from './AddComment'
import UserForm from './UserForm'
import UserPortal from './UserPortal'
import Routes from './Routes'
import Dashboard from './Dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { stripSpaces, confirmPopUp, validatePassword, validateEmail } from '../utils/globalFunc'

// init fontAwesome
library.add(fas, far)

const AppContainer = styled.section.attrs({})`
  width: 100%;
  max-width: 800px;
  margin: 20px auto 80px;
  background: #fff;
  box-shadow: 0 20px 50px 0 rgba(34,43,55,.1);
  padding: 20px 40px;
  border-radius: 5px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;  
`;

const NewPostContainer = styled.div`
  margin-top: 3rem;
`;

const ErrorMessage = styled.div`
  color: #D31C1D;
  text-align: center;
  font-size: .875rem;
`;

const defaultState = {
  loaded: false,
  profileImg: '',
  registering: false,
  loggedIn: false,
  loggedInAs: '',
  todo: '',
  todos: [],
  displayComments: 5,
  editing: false,
  editingTodo: '',
  editingTodoId: null,
  username: '',
  email: '',
  password: '',
  rePassword: '',
  userError: false,
  errorMessage: '',
  token: '',
  forgetPass: false,
  userRole: ''
}

class App extends Component {
  constructor() {
    super()
    this.state = defaultState
  }

  loadComments = () => {
    
    if (this.state.loggedInAs && this.state.loggedIn && this.state.userRole !== 'administrator') {
      axios.post('/api/user-comments', {}, {
        headers: {'Authorization': 'bearer ' + this.state.token}
      }).then(res => {
        if (res.data.todos && res.status === 200) {
          this.setState({ todos: res.data.todos, loaded: true  })
        } else {
          this.setState({ userError: true, errorMessage: 'Server Error', loaded: true })
        }
      })
    } else {
      axios.get('/api/all-comments').then(res => {
        if (res.data.payload && res.status === 200) {
          this.setState({ todos: res.data.payload, loaded: true  })
        } else {
          this.setState({ userError: true, errorMessage: 'Server Error', loaded: true })
        }
      })
    }
  }
  clearInput = () => {
    this.setState({
      loaded: true,
      registering: false,
      todo: '', 
      todos: [],
      editing: false,
      editingTodo: '',
      editingTodoId: '',
      username: '',
      email: '',
      password: '',
      rePassword: '',
      userError: false,
      errorMessage: '',
      forgetPass: false
    })
  }

  addTodo = (e) => {
    e.preventDefault();
    axios.post(`/api/addComment`, {
      todo: this.state.todo,
      userId: this.state.loggedInAs
    }, {
        headers: { 'Authorization': 'bearer ' + this.state.token }
    }).then(this.loadComments)
    this.clearInput()
  }

  removeTodo = id => {
    if (confirmPopUp("Want to delete?")) {
      axios.delete(`/api/user-comments/${id}`).then(this.loadComments)
    }
  }

  handleChange = (nameToUpdate, value) => {
    this.setState({
      [nameToUpdate]: value,
      userError: false,
      errorMessage: ''
    })
  }

  editTodo = (id, description) => {
    this.setState({
      editing: true,
      editingTodo: description,
      editingTodoId: id
    })
  }

  updateTodo = () => {
    axios.put('/api/user-comments/edit', {
      id: this.state.editingTodoId,
      description: this.state.editingTodo
    }).then(this.loadComments)
    this.clearInput()
  }

  forgetPassRequest = (e) => {
    e.preventDefault()
    this.setState({loaded:false})
    axios.post('/api/retrieve-user-info', {
      email: this.state.email
    }).then(res => {
      if (res.status === 200) {
        this.setState({ userError: true, errorMessage: res.data.message, email: '', loaded:true })
      }
      if (res.status === 203) {
        this.setState({ userError: true, errorMessage: res.data.message, loaded:true })
      }
    })
  }

  createNewUser = (e) => {
    e.preventDefault()
    if (this.state.password !== this.state.rePassword) {
      this.setState({
        userError: true,
        errorMessage: `You passwords don't match`
      })
      return null
    }
    if (!validatePassword(this.state.password)) {
      this.setState({
        userError: true,
        errorMessage: `Please make sure your password has uppercase, lowercase letter, number, special character and no space.`
      })
      return null
    } 
    if (!validateEmail(this.state.email)) {
      this.setState({
        userError: true,
        errorMessage: `this email address ${this.state.email} is not valid.`
      })
      return null
    } 

    axios.post('/api/newuser', {
      username: stripSpaces(this.state.username),
      email: stripSpaces(this.state.email),
      password: stripSpaces(this.state.password),
      profileImg: this.state.profileImg
    }).then(res => {
      if (res.status === 200) {
        const { _id, role, profileImg } = res.data.user
        this.setState({ loggedInAs: _id, loggedIn: true, token: res.data.token, profileImg, userRole: role })
        window.sessionStorage.setItem('token', res.data.token);
        this.clearInput()
        this.loadComments()
        this.props.history.push(`/user/${this.state.loggedInAs}`)
      } else {
        this.setState({ userError: true, errorMessage: res.data.message })
      }
    })
  }

  sessionLogin = () => {
    const token = window.sessionStorage['token']
    axios.post('/api/login/sso', {}, {
      headers: { 'Authorization': 'bearer ' + token }
    }).then(res => {
      if (res.status === 200) {
        const { _id, profileImg, role} = res.data.user
        this.setState({ loggedInAs: _id, loggedIn: true, token, profileImg, userRole: role })
        this.clearInput()
        this.loadComments()
        role === 'administrator' ? this.props.history.push(`/dashboard/${_id}`) : this.props.history.push(`/user/${this.state.loggedInAs}`)
      } else {
        this.setState({ userError: true, errorMessage: res.data.message })
      }
    })
  }

  userLogin = (e) => {
    e.preventDefault();
    axios.post('/api/login', {
      username: stripSpaces(this.state.username),
      password: stripSpaces(this.state.password)
    }).then(res => {
      if (res.status === 200) {
        const { _id, profileImg, role} = res.data.user
        window.sessionStorage.setItem('token', res.data.token);
        this.setState({ loggedInAs: _id, loggedIn: true, token: res.data.token, profileImg, userRole: role })
        this.clearInput()
        this.loadComments()
        console.log(role)
        role === 'administrator' ? this.props.history.push(`/dashboard/${_id}`) : this.props.history.push(`/user/${this.state.loggedInAs}`)
      } else {
        this.setState({ userError: true, errorMessage: res.data.message })
      }

    })
  }

  userLogout = async (e) => {
    e.preventDefault();
    if (confirmPopUp("Are you sure you want to logout?")) {
      await this.setState({
        ...defaultState
      })
      await window.sessionStorage.setItem('token', '');
      this.loadComments()
      this.props.history.push(`/login`)
    }
  }

  componentDidMount() {
    if (window.sessionStorage['token']) {
      this.sessionLogin()
    } else {
      this.loadComments()
    }
  }

  render() {
    return (
      <AppContainer>
        <UserPortal
          userRole={this.state.userRole}
          loggedIn={this.state.loggedIn}
          loggedInAs={this.state.loggedInAs}
          userProfileImg={this.state.profileImg}
          username={this.state.todos[0] ? this.state.todos[0] : ''}
          userLogout={this.userLogout}
          token={this.state.token}
        />
        <Dashboard userRole={this.state.userRole} token={this.state.token} />
        <ShowComments
          userRole={this.state.userRole}
          loaded={this.state.loaded}
          loggedIn={this.state.loggedIn}
          handleChange={this.handleChange}
          completeTodo={this.completeTodo}
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
          editing={this.state.editing}
          editingTodo={this.state.editingTodo}
          editingTodoId={this.state.editingTodoId}
          updateTodo={this.updateTodo}
          displayComments={this.state.displayComments}
        />
        { !this.state.loggedIn ? (
          <React.Fragment>
            <UserForm 
              loaded={this.state.loaded}
              handleChange = {this.handleChange} 
              createNewUser={this.createNewUser}
              userLogin={this.userLogin}
              forgetPassRequest={this.forgetPassRequest}
              state={this.state}
              history={this.props.history}
            / >
            <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
          </React.Fragment>
        ) : (
          <NewPostContainer>
              <AddComment
                handleChange={this.handleChange}
                addTodo={this.addTodo}
                todo={this.state.todo}
              />
          </NewPostContainer>
        ) }
      </AppContainer>
    )
  }
}

export default Routes(App)
