import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  InputGroup,
  InputButton,
  InputTextarea
} from '../../utils/Input'

const CommentContainer = styled.summary`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  display:flex;
  flex-wrap:wrap;
  margin-top: 2rem;
`;

const ContentContainer = styled.div`
    font-size: 1.25rem;
    width: 100%;
    margin-bottom: 1rem;
    background: #f8f8f8;
    padding: 15px;
    border-radius: .5rem;
`;

const AuthorContainer = styled.aside`
  display:flex;
  align-items:center;
  justify-content: flex-end;
  text-align: right;
  width: 50%;
  font-size: .875rem;
  color: rgba(0,0,0,0.6);
`;

const IconContainer = styled.aside`
  display:flex;
  align-items:center;
  text-align: left;
  width: 50%;
`;

const UpdateContentContainer = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 8px 2px rgba(65,64,66,.1);
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  cursor: pointer;
  color: #4285F4;
  padding: .375rem .75rem;
  border-radius: 100px;
  border: 1px solid;
  margin-right: 1rem;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    color:#fff;
    background-color: #4285F4;
  }
`;

const EditTodo = props => (
  <UpdateContentContainer>
    <InputGroup>
      <InputTextarea onChange={(e) => props.handleChange('editingTodo', e.target.value)} value={props.editingTodo}></InputTextarea>
    </InputGroup>
    <InputGroup>
      <InputButton type="button" onClick={props.updateTodo}>Update</InputButton>
    </InputGroup>
  </UpdateContentContainer>
)

EditTodo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  editingTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
}

const Comment = props => {
  const { description, id, removeTodo, editTodo, userPosted, editing, editingTodo, editingTodoId, handleChange, updateTodo, loggedIn, profileImg } = props
  
  return (
    <CommentContainer key={description}>
      {
        editing && editingTodoId === id ? (
          <EditTodo handleChange={handleChange} editingTodo={editingTodo} updateTodo={updateTodo} />
        ) : (
          <ContentContainer>{description}</ContentContainer>
        )
      }
      <IconContainer>
      {
        loggedIn && !editing ? (
          <React.Fragment>
            <Icon onClick={() => removeTodo(id)}><FontAwesomeIcon prefix="far" icon="trash-alt" /> delete</Icon>
            <Icon onClick={() => editTodo(id, description)}><FontAwesomeIcon prefix="fas" icon="edit" /> edit</Icon>
          </React.Fragment>
      ) : ('')
    }
      </IconContainer>
      <AuthorContainer>
        <img width="32" src={profileImg ? profileImg : '/assets/images/avatar-default.png'} />&nbsp;&nbsp;By {userPosted}
      </AuthorContainer>
    </CommentContainer>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userPosted: PropTypes.string.isRequired
}

export default Comment
