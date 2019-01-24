import React from 'react'
import Comment from '../Comment'
import StyledLoader from '../Loader'
import { LineButton } from '../../utils/Input'


const ShowComments = props => {
  const { loggedIn, allComments, removeTodo, editComment, editing, editingTodo, editingTodoId, updateTodo, handleChange, userRole } = props
  let { displayComments } = props

  if (loggedIn && !allComments.length) {
    return <h3>You don't have any comments yet!</h3>
  }

  return (
    <section>
      {allComments.slice(0, displayComments).map(comment => (
        <Comment
          loggedIn={loggedIn}
          userRole={userRole}
          removeTodo={removeTodo}
          description={comment.description}
          profileImg={comment.userProfileImg ? comment.userProfileImg : ''}
          id={comment._id}
          key={comment._id}
          editComment={editComment}
          editing={editing}
          editingTodo={editingTodo}
          editingTodoId={editingTodoId}
          userPosted={comment.userPosted}
          updateTodo={updateTodo}
          handleChange={handleChange}
        />
      ))}
      {displayComments >= allComments.length ? '' : <LineButton onClick={() => handleChange('displayComments', displayComments += 5)}>Load More</LineButton> }
    </section>
  )
}
export default StyledLoader(ShowComments)
