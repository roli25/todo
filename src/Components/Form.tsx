import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ ...props }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    props.editTodo && setInput(props.editTodo.title);
  }, [props.editTodo]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!props.editTodo) {
      props.onAdd({ id: uuidv4(), title: input, completed: false });
    } else {
      props.onUpdate({
        id: props.editTodo.id,
        title: input,
        completed: props.editTodo.completed,
      });
    }
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="task-input"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button-add" type="submit">
        {props.editTodo ? "OK" : "ADD"}
      </button>
    </form>
  );
};
export default Form;
