import React from "react";
import {
  InputGroup,
  InputLabel,
  InputButton,
  InputTextarea
} from '../../utils/Input'

const AddComment = props => {
  const { handleChange, addTodo, todo } = props;
  return (
    <article>
      {/* <input onChange={handleChange} value={todo} /> */}
      <InputGroup>
        <InputLabel>New Comment:</InputLabel>
        <InputTextarea onChange={(e) => handleChange('todo', e.target.value)} value={todo}></InputTextarea>
      </InputGroup>
      <InputGroup>
        <InputButton type="button" onClick={addTodo}>Post Comment</InputButton>
      </InputGroup>
    </article>
  );
};

export default AddComment;
