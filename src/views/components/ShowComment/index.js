import React, { Component } from 'react'
import axios from 'axios'
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import Comment from '../Comment'
import { LineButton } from '../../../utils/Input'
import { connect } from 'react-redux';
import { loadMoreComments, loadComments } from './actions';
import { startLoading, finishLoading, setError, clearError } from '../../../controllers/Actions'

class ShowComments extends Component {

  constructor(props) {
    super(props)

    this.loggedIn = props.loggedIn
    this.allComments = props.allComments
    this.userRole = props.userRole
    this.displayComments = props.displayComments
    this.loadMoreComments = props.loadMoreComments
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

  componentDidMount() {
    if (!window.sessionStorage['token']) {
      this.loadAllComments()
    }
  }

  componentWillReceiveProps(nextProps) {
    
    this.allComments = nextProps.allComments
    this.displayComments = nextProps.displayComments
    this.loggedIn = nextProps.loggedIn
    this.userRole = nextProps.userRole
    this.loggedInAs = nextProps.loggedInAs
    this.loggedIn = nextProps.loggedIn
    this.token = nextProps.token
    this.loaded = nextProps.loaded

    if (this.loggedInAs && this.loggedIn && this.userRole !== 'administrator') {
      this.allComments = this.allComments.filter(e => e.userId === this.loggedInAs)
    }

    // this.loadAllComments()
  }

  render() {
    return (
      <ReactPlaceholder type='media' rows={5} ready={this.loaded}>
        {this.allComments.slice(0, this.displayComments).map(comment => (
          <Comment
            description={comment.description}
            profileImg={comment.userProfileImg ? comment.userProfileImg : ''}
            id={comment._id}
            key={comment._id}
            userPosted={comment.userPosted}
          />
        ))}
        {this.displayComments >= this.allComments.length ? '' : <LineButton onClick={() => {
          this.loadMoreComments(5)
          this.loadAllComments()
        }}>Load More</LineButton>}
      </ReactPlaceholder>
    )
  }
}


const mapStateToProps = state => ({ ...state.user, ...state.loading})

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
  loadComments: allComments => dispatch(loadComments(allComments)),
  loadMoreComments: number => dispatch(loadMoreComments(number)),
  loadingStart: () => dispatch(startLoading()),
  loadingEnd: () => dispatch(finishLoading()),
  setError: errorMessage => dispatch(setError(errorMessage)),
  clearError: () => dispatch(clearError())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments)
