import React from 'react'
import Comment from './Comment'

const ShowComments = props => {
  const { loggedIn, todos, removeTodo, editTodo, editing, editingTodo, editingTodoId, updateTodo, handleChange } = props

  if (loggedIn && !todos.length) {
    return <h3>You don't have any comments yet!</h3>
  }

  return (
    <section className="ShowTodos">
      {todos.map(todo => (
        <Comment
          loggedIn={loggedIn}
          removeTodo={removeTodo}
          description={todo.description}
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
    </section>
  )
}
export default ShowComments
