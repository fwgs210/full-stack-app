import React from "react";
import axios from 'axios'
import {
  InputGroup,
  InputLabel,
  InputButton,
  InputTextarea
} from '../../../utils/Input'
import { connect } from 'react-redux';
import { typeComment, clearComment, addComment } from './actions'

const handleSubmit = (loggedInAs, comment, token, addComment, clearComment) => {
  axios.post(`/api/addComment`, {
    todo: comment,
    userId: loggedInAs
  }, {
      headers: { 'Authorization': 'bearer ' + token }
    }).then( res => {
        addComment(res.data.payload)
        clearComment()
    })
}

const AddComment = ({ comment, newComment, loggedInAs, token, addComment, clearComment, loaded }) => {

  if (!loaded) {
    return null
  }

  return (
    <article>
      <InputGroup>
        <InputLabel>New Comment:</InputLabel>
        <InputTextarea onChange={newComment} value={comment}></InputTextarea>
      </InputGroup>
      <InputGroup>
        <InputButton type="button" onClick={() => handleSubmit(loggedInAs, comment, token, addComment, clearComment)}>Post Comment</InputButton>
      </InputGroup>
    </article>
  );
};

const mapStateToProps = state => ({ ...state.user, ...state.loaded })
//this method is used to pass state down functions

const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
  newComment: (comment) => {
    dispatch(typeComment(comment))
  },
  clearComment: () => dispatch(clearComment()),
  addComment: (newComment) => dispatch(addComment(newComment))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
