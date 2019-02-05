import React, { Component } from 'react'
import axios from 'axios'
import ReactPlaceholder from 'react-placeholder';
import Comment from '../Comment'
import { LineButton } from '../../../utils/Input'
import { connect } from 'react-redux';
import { loadComments } from './actions';
import { startLoading, finishLoading, setError, clearError } from '../../../controllers/Actions'

class ShowComments extends Component {

  constructor(props) {
    super(props)

    this.allComments = props.allComments
    this.userRole = props.userRole
    this.loadingStart = props.loadingStart
    this.loadingEnd = props.loadingEnd
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
    this.loadingStart();

    axios.get('/api/all-comments').then(async res => {
      if (res.data.payload && res.status === 200) {
        this.allComments = res.data.payload
        await this.loadComments(res.data.payload)
        
        this.loadingEnd();
      }
      else {
        this.setError('Server Error')
        this.loadingEnd()
      }
    })
  }

  loadUserComments = () => {
    this.loadingStart();

    axios.post('/api/user-comments', {}, {
      headers: { 'Authorization': 'bearer ' + this.token }
    }).then(async res => {
      if (res.data.payload && res.status === 200) {
        this.allComments = res.data.payload
        await this.loadComments(res.data.payload)

        this.loadingEnd();
      }
      else {
        this.setError('Server Error')
        this.loadingEnd()
      }
    })
  }

  componentDidMount() {
    if (!window.sessionStorage['token']) {
      this.loadAllComments()
    }
    if(this.loggedIn) {
      this.loadUserComments()
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
      <ReactPlaceholder type='media' rows={5} ready={this.loaded}>
        {this.allComments.slice(0, this.state.displayComments).map(comment => (
          <Comment
            description={comment.description}
            profileImg={comment.userId.profileImg ? comment.userId.profileImg : ''}
            id={comment._id}
            key={comment._id}
            userPosted={comment.userId.username}
          />
        ))}
        {this.state.displayComments >= this.allComments.length ? '' : <LineButton onClick={() => {
          this.setState({
            displayComments: this.state.displayComments + 5
          })
        }}>Load More</LineButton>}
      </ReactPlaceholder>
    )
  }
}


const mapStateToProps = state => ({ ...state.user, ...state.loading})

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
  loadComments: allComments => dispatch(loadComments(allComments)),
  loadingStart: () => dispatch(startLoading()),
  loadingEnd: () => dispatch(finishLoading()),
  setError: errorMessage => dispatch(setError(errorMessage)),
  clearError: () => dispatch(clearError())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments)
