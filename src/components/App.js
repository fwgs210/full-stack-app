import React, { Component } from 'react'
import ShowComments from './ShowComments'
import AddComment from './AddComment'
import axios from 'axios'
import styled from 'styled-components'
import {
  InputGroup,
  InputLabel,
  InputField,
  InputButton
} from './Input'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { stripSpaces, confirmPopUp } from "../utils/globalFunc"

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

const UserLogin = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 40px auto 0;
`;

const NewPostContainer = styled.div`
  margin-top: 3rem;
`;

const ErrorMessage = styled.div`
  color: #D31C1D;
  text-align: center;
  font-size: .875rem;
`;

const LineButton = styled.button`
    width: 100%;
    background: none;
    border: none;
    color: #999;
    text-decoration: underline;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    padding: 12px 20px;
`

const defaultState = {
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
  token: ''
}

class App extends Component {
  constructor() {
    super()
    this.state = defaultState
  }

  loadComments = () => {
    if (this.state.loggedInAs && this.state.loggedIn) {
      axios.post('/user-comments', {
        userId: this.state.loggedInAs
      }, {
        headers: {'Authorization': 'bearer ' + this.state.token}
      }).then(res => {
        console.log(res)
        if (res.data.todos) {
          this.setState({ todos: res.data.todos })
        }
      })
    } else {
      axios.get('/all-comments').then(res => {
        console.log(res.data.payload)
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
      errorMessage: ''
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

  forgetPass = () => {
    axios.post('/retrieve-user-info', {
      email: 'tracysu1990@hotmail.com'
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        console.log(res)
        // const { _id } = res.data.user
        // this.setState({ loggedInAs: _id, loggedIn: true, token })
        // this.clearInput()
        // this.loadComments()
      } else {
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
    axios.post('/newuser', {
      username: stripSpaces(this.state.username),
      email: stripSpaces(this.state.email),
      password: stripSpaces(this.state.password)
    }).then(res => {
      console.log(res)
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
      console.log(res)
      if (res.status === 200) {
        const { _id } = res.data.user
        this.setState({ loggedInAs: _id, loggedIn: true, token })
        this.clearInput()
        this.loadComments()
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
      console.log(res)
      if (res.status === 200) {
        const { _id } = res.data.user
        window.sessionStorage.setItem('token', res.data.token);
        this.setState({ loggedInAs: _id, loggedIn: true, token: res.data.token })
        this.clearInput()
        this.loadComments()
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
    }
  }

  componentDidMount() {
    if (window.sessionStorage['token']) {
      this.sessionLogin()
    } else {
      this.loadComments()
    }

    this.forgetPass()
  }

  render() {
    return (
      <AppContainer>
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
          <UserLogin>
            {
              this.state.registering ? (
                <form onSubmit={this.createNewUser}>
                  <InputGroup>
                    <InputLabel>username</InputLabel>
                    <InputField value={this.state.username} onChange={(e) => this.handleChange('username', e.target.value)} type="text" required />
                  </InputGroup>
                  <InputGroup>
                    <InputLabel>email</InputLabel>
                    <InputField value={this.state.email} onChange={(e) => this.handleChange('email', e.target.value)} type="email" required />
                  </InputGroup>
                  <InputGroup>
                    <InputLabel>password</InputLabel>
                    <InputField value={this.state.password} onChange={(e) => this.handleChange('password', e.target.value)} type="password" required />
                  </InputGroup>
                  <InputGroup>
                    <InputLabel>Re-type password</InputLabel>
                    <InputField value={this.state.rePassword} onChange={(e) => this.handleChange('rePassword', e.target.value)} type="password" required />
                  </InputGroup>
                  <InputGroup>
                    <InputButton type="submit">Register</InputButton>
                    <LineButton onClick={() => this.setState({ registering: false })}>Login</LineButton>
                  </InputGroup>
                </form>
              ) : (
                <form onSubmit={this.userLogin}>
                  <InputGroup>
                  <InputLabel>username</InputLabel>
                  <InputField value={this.state.username} onChange={(e) => this.handleChange('username', e.target.value)} type="text" required />
                </InputGroup>
                <InputGroup>
                  <InputLabel>password</InputLabel>
                  <InputField value={this.state.password} onChange={(e) => this.handleChange('password', e.target.value)} type="password" required />
                </InputGroup>
                <InputGroup>
                  <InputButton type="submit">login</InputButton>
                  <LineButton onClick={() => this.setState({registering: true})}>Register here</LineButton>
                </InputGroup>
                </form>
              )
            }

          </UserLogin>
        ) : (
          <NewPostContainer>
              <AddComment
                handleChange={this.handleChange}
                addTodo={this.addTodo}
                todo={this.state.todo}
              />
              <LineButton onClick={this.userLogout}>logout</LineButton>
          </NewPostContainer>
        ) }
        { this.state.userError ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : '' }
      </AppContainer>
    )
  }
}

export default App
