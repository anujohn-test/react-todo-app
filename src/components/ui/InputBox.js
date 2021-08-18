import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
  const { value, handleChange, handleKeyUp } = props;
  //autoFocus
  return (
    <input
      type="text"
      className="form-control add-todo"
      value={value}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      placeholder="Add New"
    />
  );
}

export default enhance(InputBox);
