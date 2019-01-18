import React, { Component } from 'react'
import ShowComments from './ShowComment'
import AddComment from './AddComment'
import UserForm from './UserForm'
import UserPortal from './UserPortal'
import axios from 'axios'
import styled from 'styled-components'
import Routes from './Routes'
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
  profileImg: '',
  registering: false,
  loggedIn: false,
  loggedInAs: '',
  todo: '',
  todos: [],
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
  forgetPass: false
}

class App extends Component {
  constructor() {
    super()
    this.state = defaultState
  }

  loadComments = () => {
    if (this.state.loggedInAs && this.state.loggedIn) {
      axios.post('/user-comments', {}, {
        headers: {'Authorization': 'bearer ' + this.state.token}
      }).then(res => {
        if (res.data.todos) {
          this.setState({ todos: res.data.todos })
        }
      })
    } else {
      axios.get('/all-comments').then(res => {
        if (res.data.payload) {
          this.setState({ todos: res.data.payload })
        }
      })
    }
  }
  clearInput = () => {
    this.setState({
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
    axios.post(`/addComment`, {
      todo: this.state.todo,
      userId: this.state.loggedInAs
    }, {
        headers: { 'Authorization': 'bearer ' + this.state.token }
    }).then(this.loadComments)
    this.clearInput()
  }

  removeTodo = id => {
    if (confirmPopUp("Want to delete?")) {
      axios.delete(`/user-comments/${id}`).then(this.loadComments)
    }
  }

  handleChange = (nameToUpdate, value) => {
    this.setState({
      [nameToUpdate]: value
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
    axios.put('/user-comments/edit', {
      id: this.state.editingTodoId,
      description: this.state.editingTodo
    }).then(this.loadComments)
    this.clearInput()
  }

  forgetPassRequest = (e) => {
    e.preventDefault()
    axios.post('/retrieve-user-info', {
      email: this.state.email
    }).then(res => {
      if (res.status === 200) {
        this.setState({ userError: true, errorMessage: res.data.message, email: '' })
      }
      if (res.status === 203) {
        this.setState({ userError: true, errorMessage: res.data.message })
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

    axios.post('/newuser', {
      username: stripSpaces(this.state.username),
      email: stripSpaces(this.state.email),
      password: stripSpaces(this.state.password),
      profileImg: this.state.profileImage
    }).then(res => {
      if (res.status === 200) {
        const { _id } = res.data.user
        this.setState({ loggedInAs: _id, loggedIn: true, token: res.data.token })
        this.clearInput()
      } else {
        this.setState({ userError: true, errorMessage: res.data.message })
      }
    })
  }

  sessionLogin = () => {
    const token = window.sessionStorage['token']
    axios.post('/login/sso', {}, {
      headers: { 'Authorization': 'bearer ' + token }
    }).then(res => {
      if (res.status === 200) {
        const { _id } = res.data.user
        this.setState({ loggedInAs: _id, loggedIn: true, token })
        this.clearInput()
        this.loadComments()
        this.props.history.push(`/user/${this.state.loggedInAs}`)
      } else {
        this.setState({ userError: true, errorMessage: res.data.message })
      }
    })
  }

  userLogin = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: stripSpaces(this.state.username),
      password: stripSpaces(this.state.password)
    }).then(res => {
      if (res.status === 200) {
        const { _id, profileImg } = res.data.user
        window.sessionStorage.setItem('token', res.data.token);
        this.setState({ loggedInAs: _id, loggedIn: true, token: res.data.token, profileImg })
        this.clearInput()
        this.loadComments()
        this.props.history.push(`/user/${this.state.loggedInAs}`)
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
          loggedIn={this.state.loggedIn}
          loggedInAs={this.state.loggedInAs}
          userProfileImg={this.state.userProfileImg}
          username={this.state.todos[0] ? this.state.todos[0] : ''}
          userLogout={this.userLogout}
          token={this.state.token}
        />
        <ShowComments
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
        />
        { !this.state.loggedIn ? (
          <UserForm 
            handleChange = {this.handleChange} 
            createNewUser={this.createNewUser}
            userLogin={this.userLogin}
            forgetPassRequest={this.forgetPassRequest}
            state={this.state}
            history={this.props.history}
          />
        ) : (
          <NewPostContainer>
              <AddComment
                handleChange={this.handleChange}
                addTodo={this.addTodo}
                todo={this.state.todo}
              />
          </NewPostContainer>
        ) }
        { this.state.userError ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : '' }
      </AppContainer>
    )
  }
}

export default Routes(App)
