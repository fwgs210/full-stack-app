import React from 'react'
import Comment from '../Comment'
import StyledLoader from '../Loader'
import { LineButton } from '../../utils/Input'


const ShowComments = props => {
  const { loggedIn, todos, removeTodo, editTodo, editing, editingTodo, editingTodoId, updateTodo, handleChange } = props
  let { displayComments } = props

  if (loggedIn && !todos.length) {
    return <h3>You don't have any comments yet!</h3>
  }

  return (
    <section className="ShowTodos">
      {todos.slice(0, displayComments).map(todo => (
        <Comment
          loggedIn={loggedIn}
          removeTodo={removeTodo}
          description={todo.description}
          profileImg={todo.userProfileImg ? todo.userProfileImg : ''}
          id={todo._id}
          key={todo._id}
          completed={todo.completed}
          editTodo={editTodo}
          editing={editing}
          editingTodo={editingTodo}
          editingTodoId={editingTodoId}
          userPosted={todo.userPosted}
          updateTodo={updateTodo}
          handleChange={handleChange}
        />
      ))}
      {displayComments >= todos.length ? '' : <LineButton onClick={() => handleChange('displayComments', displayComments += 5)}>Load More</LineButton> }
    </section>
  )
}
export default StyledLoader(ShowComments)
