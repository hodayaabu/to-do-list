import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputText.title.trim() &&
      inputText.title.length >= 3 &&
      inputText.title.length <= 20
    ) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please write an item between 3 to 20 letters");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          onChange={onChange}
        />
        <button className="input-submit"><FaPlusCircle /></button>
      </form>
    </>
  );
};

export default InputTodo;
