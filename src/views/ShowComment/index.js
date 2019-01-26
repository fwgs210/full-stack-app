import React, { Component } from 'react'
import axios from 'axios'
import Comment from '../Comment'
import StyledLoader from '../Loader'
import { LineButton } from '../../utils/Input'
import { connect } from 'react-redux';
import { loadMoreComments, loadComments } from './actions';
import { startLoading, finishLoading, setError, clearError } from '../../controllers/Actions'

// const ShowComments = props => {
//   const { loggedIn, allComments, removeTodo, editComment, editing, editingTodo, editingTodoId, 
//     updateTodo, handleChange, userRole, displayComments, loadMoreComments } = props

//   if (loggedIn && !allComments.length) {
//     return <h3>You don't have any comments yet!</h3>
//   }
  

//     return (
//       <section>
//         {allComments.slice(0, displayComments).map(comment => (
//           <Comment
//             loggedIn={loggedIn}
//             userRole={userRole}
//             removeTodo={removeTodo}
//             description={comment.description}
//             profileImg={comment.userProfileImg ? comment.userProfileImg : ''}
//             id={comment._id}
//             key={comment._id}
//             editComment={editComment}
//             editing={editing}
//             editingTodo={editingTodo}
//             editingTodoId={editingTodoId}
//             userPosted={comment.userPosted}
//             updateTodo={updateTodo}
//             handleChange={handleChange}
//           />
//         ))}
//         {displayComments >= allComments.length ? '' : <LineButton onClick={() => loadMoreComments(5)}>Load More</LineButton> }
//       </section>
//     )
// }

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
  }

  loadAllComments = () => {
    this.loadingStart();

    axios.get('/api/all-comments').then(res => {
      if (res.data.payload && res.status === 200) {
        this.loadComments(res.data.payload)
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

    if (this.loggedInAs && this.loggedIn && this.userRole !== 'administrator') {
      this.allComments = this.allComments.filter(e => e.userId === this.loggedInAs)
    }

    // this.loadAllComments()
  }

  render() {
    if (this.loggedIn && !this.allComments.length) {
      return <h3>You don't have any comments yet!</h3>
    }

    return (
      <section>
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
      </section>
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
