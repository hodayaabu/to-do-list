import React, { useState } from "react";
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  const handleUpdatedNoteDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const displayBlock = {
    display: "block",
  };

  const displayNone = {
    display: "none",
  };

  const newTodo = {
    color: "#fff",
    backgroundColor: "#40AEDF",
    fontWeight: "600",
    padding: "2px 9px 3px 5px",
    fontSize: "12px",
    borderRadius: "calc(0.5 * 100px)",
    marginLeft: "8px",
  };

  const { completed, id, title, note } = props.todo;

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />

        <span style={completed ? completedStyle : null}><MdArrowRight className="titleArrow" /> {title}</span>
        <span
          style={note.length ? displayBlock : displayNone}
          className={styles.note}
        >
          {note}
        </span>

        <span style={props.todo.new ? newTodo : null}>{props.todo.new}</span>
        <button onClick={() => props.deleteTodoProps(id)}><FaTrash /></button>
      </div>
      <label style={editMode}>To do...</label>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => props.setUpdate(e.target.value, id)}
        onKeyPress={handleUpdatedDone}
      />

      <label style={editMode}>Note:</label>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={note}
        onChange={(e) => props.setUpdateNote(e.target.value, id)}
        onKeyDown={handleUpdatedNoteDone}
      />
    </li>
  );
};

export default TodoItem;
