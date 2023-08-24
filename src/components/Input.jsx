import React from "react";

function Input(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}
export default Input;
