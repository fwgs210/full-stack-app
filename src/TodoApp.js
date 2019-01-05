import React, { Component } from 'react'
import ShowTodos from './components/ShowTodos'
import AddTodo from './components/AddTodo'
import axios from 'axios'
import { stripSpaces } from "./utils/globalFunc";

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      loggedInAs: '',
      todo: '',
      todos: [],
      editing: false,
      editingTodo: '',
      editingTodoId: null,
      username: '',
      password: '',
      userError: false,
      errorMessage: ''
    }
  }

  refresh = () => {
    if (this.state.loggedInAs && this.state.loggedIn) {
      axios.post('/todos', {
        userId: this.state.loggedInAs
      }).then(res => {
        console.log(res)
        if (res.data.todos) {
          this.setState({ todos: res.data.todos })
        }
      })
    }
  }
  clearInput = () => {
    this.setState({
      todo: '', 
      editing: false,
      editingTodo: '',
      editingTodoId: null,
      username: '',
      password: '',
      userError: false,
      errorMessage: ''
    })
  }

  addTodo = () => {
    axios.post(`/addTodo`, {
      todo: this.state.todo,
      userId: this.state.loggedInAs
    }).then(this.refresh)
    this.clearInput()
  }

  completeTodo = id => {
    axios.patch(`/todos/complete/${id}`).then(this.refresh)
  }

  removeTodo = index => {
    axios.delete(`/todos/${index}`).then(this.refresh)
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
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
    axios.put('/todos/edit', {
      id: this.state.editingTodoId,
      description: this.state.editingTodo
    }).then(this.refresh)
    this.clearInput()
  }

  createNewUser = (e) => {
    e.preventDefault()
    axios.post('/newuser', {
      username: stripSpaces(this.state.username),
      password: stripSpaces(this.state.password)
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        const { _id } = res.data.user
        this.setState({ loggedInAs: _id, loggedIn: true })
        this.clearInput()
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
        this.setState({ loggedInAs: _id, loggedIn: true })
        this.clearInput()
        this.refresh()
      } else {
        this.setState({ userError: true, errorMessage: res.data.message })
      }

    })
  }

  userLogout = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: false,
      loggedInAs: '',
      todo: '',
      todos: [],
      editing: false,
      editingTodo: '',
      editingTodoId: null,
      username: '',
      password: '',
      userError: false
    })
  }

  componentDidMount() {
    this.refresh()
  }

  render() {
    return (
      <div>
        {
          this.state.editing ? <div><input value={this.state.editingTodo} onChange={(e) => this.setState({ editingTodo: e.target.value })} /><button onClick={this.updateTodo}>Updated Todo</button></div> : <div></div>
        }
        { !this.state.loggedIn ? (
          <div>
            <input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} type="text" required />
            <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" required />
            <input type="button" value="register" onClick={this.createNewUser} />
            <input type="button" value="login" onClick={this.userLogin} />
          </div>
        ) : (
          <div>
              <AddTodo
                handleChange={this.handleChange}
                addTodo={this.addTodo}
                todo={this.state.todo}
              />
              <ShowTodos
                completeTodo={this.completeTodo}
                todos={this.state.todos}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
              />
              <input type="button" value="logout" onClick={this.userLogout} />
          </div>
        ) }
        { this.state.userError ? <p>{this.state.errorMessage}</p> : <div></div> }
      </div>
    )
  }
}

export default TodoApp
