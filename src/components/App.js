import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ShowComments from './ShowComment'
import AddComment from './AddComment'
import UserForm from './UserForm'
import UserPortal from './UserPortal'
import Dashboard from './Dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { stripSpaces, confirmPopUp, validatePassword, validateEmail } from '../utils/globalFunc'
import { loadComments } from '../controllers/Actions'

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
  loaded: true,
  profileImg: '',
  registering: false,
  loggedIn: false,
  loggedInAs: '',
  comment: '',
  allComments: [],
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
  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = defaultState
    this.allComments = []
  }

  loadComments = () => {

    if (this.state.loggedInAs && this.state.loggedIn && this.state.userRole !== 'administrator') {
      axios.post('/api/user-comments', {}, {
        headers: { 'Authorization': 'bearer ' + this.state.token }
      }).then(res => {
        if (res.data.todos && res.status === 200) {
          this.setState({ allComments: res.data.todos, loaded: true })
        } else {
          this.setState({ userError: true, errorMessage: 'Server Error', loaded: true })
        }
      })
    } else {
      axios.get('/api/all-comments').then(res => {
        if (res.data.payload && res.status === 200) {
          this.setState({ allComments: res.data.payload, loaded: true })
          this.props.load(res.data.payload)
        } 
        else {
          this.setState({ userError: true, errorMessage: 'Server Error', loaded: true })
        }
      })
    }
  }
  clearInput = () => {
    this.setState({
      loaded: true,
      registering: false,
      comment: '',
      allComments: [],
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

  newComment = (e) => {
    e.preventDefault();
    axios.post(`/api/addComment`, {
      todo: this.state.comment,
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

  editComment = (id, description) => {
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
    this.setState({ loaded: false })
    axios.post('/api/retrieve-user-info', {
      email: this.state.email
    }).then(res => {
      if (res.status === 200) {
        this.setState({ userError: true, errorMessage: res.data.message, email: '', loaded: true })
      }
      if (res.status === 203) {
        this.setState({ userError: true, errorMessage: res.data.message, loaded: true })
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
        const { _id, profileImg, role } = res.data.user
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
        const { _id, profileImg, role } = res.data.user
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

  componentWillReceiveProps(props) {
    this.allComments = props.user.allComments

  }

  render() {
    return (
      <AppContainer>
        <UserPortal
          userRole={this.state.userRole}
          loggedIn={this.state.loggedIn}
          loggedInAs={this.state.loggedInAs}
          userProfileImg={this.state.profileImg}
          username={this.state.allComments[0] ? this.state.allComments[0] : ''}
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
          allComments={this.allComments}
          removeTodo={this.removeTodo}
          editComment={this.editComment}
          editing={this.state.editing}
          editingTodo={this.state.editingTodo}
          editingTodoId={this.state.editingTodoId}
          updateTodo={this.updateTodo}
          displayComments={this.state.displayComments}
        />
        <AddCommentContainer
          state={this.state}
          handleChange={this.handleChange}
          createNewUser={this.createNewUser}
          userLogin={this.userLogin}
          forgetPassRequest={this.forgetPassRequest}
          history={this.props.history}
          newComment={this.newComment}
        />
      </AppContainer>
    )
  }
}

const AddCommentContainer = props => {
  if (!props.state.loggedIn) {
    return (
      <React.Fragment>
        <UserForm
          loaded={props.state.loaded}
          handleChange={props.handleChange}
          createNewUser={props.createNewUser}
          userLogin={props.userLogin}
          forgetPassRequest={props.forgetPassRequest}
          state={props.state}
          history={props.history}
        />
        <ErrorMessage>{props.state.errorMessage}</ErrorMessage>
      </React.Fragment>
    )
  }
  return (
    <NewPostContainer>
      <AddComment
        handleChange={props.handleChange}
        newComment={props.newComment}
        comment={props.state.comment}
      />
    </NewPostContainer>
  )
}

const mapStateToProps = state => {console.log('state',state)
   return state 
} //this method is used to pass state down functions

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
  load: (allComments) => {
    console.log('pass',allComments)
    dispatch(loadComments(allComments)) 
  }
})

// const mapDispatchToProps = (dispatch) => ({
//   doTodo(id) {
//     const action = mutations.completeTodos(id)
//     dispatch(action)
//   },
//   deleteTodo(id) {
//     console.log(id)
//     const action = mutations.deleteTodo(id)
//     dispatch(action)
//   }
// });

export default connect(mapStateToProps, mapDispatchToProps)(App)
