import React from "react";
import {
  InputGroup,
  InputLabel,
  InputButton,
  InputTextarea
} from '../../utils/Input'

const AddComment = props => {
  const { handleChange, newComment, comment } = props;
  return (
    <article>
      <InputGroup>
        <InputLabel>New Comment:</InputLabel>
        <InputTextarea onChange={(e) => handleChange('comment', e.target.value)} value={comment}></InputTextarea>
      </InputGroup>
      <InputGroup>
        <InputButton type="button" onClick={newComment}>Post Comment</InputButton>
      </InputGroup>
    </article>
  );
};

export default AddComment;
