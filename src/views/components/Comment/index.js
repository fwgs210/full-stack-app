import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  InputGroup,
  InputButton,
  InputTextarea
} from '../../../utils/Input'
import { confirmPopUp } from '../../../utils/globalFunc'
import { editingComment, typeComment, updateComment, deleteComment } from './actions'

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

const deleteThisComment = (id, deleteComment) => {
  if (confirmPopUp("Want to delete?")) {
    axios.delete(`/api/user-comments/${id}`)
    deleteComment(id)
  }
}

const updateThisComment = (editingCommentId, editingComment, updateComment) => {
  axios.put('/api/user-comments/edit', {
    id: editingCommentId,
    description: editingComment
  }).then(updateComment)
}

const EditComment = ({ typeComment, editingComment, editingCommentId, updateComment }) => (
  <UpdateContentContainer>
    <InputGroup>
      <InputTextarea onChange={(e) => typeComment(e)} value={editingComment}></InputTextarea>
    </InputGroup>
    <InputGroup>
      <InputButton type="button" onClick={() => updateThisComment(editingCommentId, editingComment, updateComment)}>Update</InputButton>
    </InputGroup>
  </UpdateContentContainer>
)

// EditComment.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   editingComment: PropTypes.string.isRequired,
//   updateTodo: PropTypes.func.isRequired
// }

const Comment = props => {
  const { deleteComment, updateComment, description, id, userPosted, profileImg, editing, editingComment, editingCommentId, loggedIn, userRole, typeComment, editThisComment } = props
  
  return (
    <CommentContainer key={description}>
      {
        editing && editingCommentId === id ? (
          <EditComment updateComment={updateComment} typeComment={typeComment} editingComment={editingComment} editingCommentId={editingCommentId} />
        ) : (
          <ContentContainer>{description}</ContentContainer>
        )
      }
      <IconContainer>
      {
          (loggedIn || userRole === 'administrator' ) && !editing  ? (
          <React.Fragment>
            <Icon onClick={() => deleteThisComment(id, deleteComment)}><FontAwesomeIcon prefix="far" icon="trash-alt" /> delete</Icon>
            <Icon onClick={() => editThisComment(id, description)}><FontAwesomeIcon prefix="fas" icon="edit" /> edit</Icon>
          </React.Fragment>
      ) : ('')
    }
      </IconContainer>
      <AuthorContainer>
        {profileImg && <img width="32" style={{ 'borderRadius': '100%' }} src={profileImg} />}
        &nbsp;&nbsp;By {userPosted}
      </AuthorContainer>
    </CommentContainer>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userPosted: PropTypes.string.isRequired
}

const mapStateToProps = state => ({ 
  editing: state.user.editing,
  editingComment: state.user.editingComment,
  editingCommentId: state.user.editingCommentId,
  loggedIn: state.user.loggedIn,
  userRole: state.user.userRole
})
//this method is used to pass state down functions

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
  editThisComment: (id, description) => dispatch(editingComment(id, description)),
  typeComment: editingComment => dispatch(typeComment(editingComment)),
  updateComment: () => dispatch(updateComment()),
  deleteComment: id => dispatch(deleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
