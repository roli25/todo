import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ onAdd, onUpdate, editTodo }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    editTodo && setInput(editTodo.title);
  }, [editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      onAdd({ id: uuidv4(), title: input, completed: false });
    } else {
      onUpdate({
        id: editTodo.id,
        title: input,
        completed: editTodo.completed,
      });
    }
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "ADD"}
      </button>
    </form>
  );
};
export default Form;
