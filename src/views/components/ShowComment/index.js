import React, { Component } from 'react'
import axios from 'axios'
import Comment from '../Comment'
import { LineButton } from '../../../utils/Input'
import { connect } from 'react-redux';
import { loadComments } from './actions';
import { setError, clearError } from '../../../controllers/Actions'

class ShowComments extends Component {

  constructor(props) {
    super(props)

    this.allComments = props.allComments || []
    this.userRole = props.userRole
    this.loadComments = props.loadComments
    this.loggedInAs = props.loggedInAs
    this.loggedIn = props.loggedIn
    this.token = props.token
    this.clearError = props.clearError
    this.setError = props.setError
    this.loaded = props.loaded
  }

  state = {
    displayComments: 5
  }

  loadAllComments = () => {
    axios.get('/api/all-comments').then(async res => {
      if (res.data.payload && res.status === 200) {
        this.allComments = res.data.payload
        await this.loadComments(res.data.payload)
      }
      else {
        this.setError('Server Error')
      }
    })
  }

  loadUserComments = () => {
    axios.post('/api/user-comments', {}, {
      headers: { 'Authorization': 'bearer ' + this.token }
    }).then(async res => {
      if (res.data.payload && res.status === 200) {
        this.allComments = res.data.payload
        await this.loadComments(res.data.payload)
      }
      else {
        this.setError('Server Error')
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userRole !== this.props.userRole) {
      if (this.userRole === 'administrator') {
        this.loadAllComments()
      } else {
        this.loadUserComments()
      }
    }
  }

  componentDidMount() {
    if (!window.sessionStorage['token']) {
      this.loadAllComments()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.allComments = nextProps.allComments
    this.loggedIn = nextProps.loggedIn
    this.userRole = nextProps.userRole
    this.loggedInAs = nextProps.loggedInAs
    this.token = nextProps.token
    this.loaded = nextProps.loaded

  }

  render() {
    return (
      <React.Fragment>
        {this.allComments.slice(0, this.state.displayComments).map(comment => (
          <Comment
            description={comment.description}
            profileImg={comment.userId.profileImg ? comment.userId.profileImg : ''}
            id={comment._id}
            key={comment._id}
            userPosted={comment.userId.username}
          />
        ))}
        {this.state.displayComments >= this.allComments.length ? '' : <LineButton style={{ "display": "block", "margin": "20px auto 5px"}} onClick={() => {
          this.setState({
            displayComments: this.state.displayComments + 5
          })
        }}>Load More</LineButton>}
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({ ...state.get('user').toJS(), ...state.get('loading').toJS() })

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
  loadComments: allComments => dispatch(loadComments(allComments)),
  setError: errorMessage => dispatch(setError(errorMessage)),
  clearError: () => dispatch(clearError())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments)
