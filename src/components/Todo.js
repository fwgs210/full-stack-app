import React from 'react'
import PropTypes from 'prop-types'

const Todo = props => {
  const { description, id, removeTodo, completeTodo, completed, editTodo } = props
  return (
    <li key={description}>
      {completed ? <del>{description}</del> : description}
      <button onClick={() => completeTodo(id)}>Complete Todo</button>
      <button onClick={() => removeTodo(id)}>Remove Todo</button>
      <button onClick={() => editTodo(id, description)}>Edit Todo</button>
    </li>
  )
}

Todo.propTypes = {
  description: PropTypes.string.isRequired
}

export default Todo
