import React, { useState } from "react";
import { Interface } from "readline";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodosList from "./Components/TodosList";
import { Todo } from "./Components/Interfaces/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<string | null>(null);

  const addTodo = (todo: Todo) => setTodos([...todos, todo]);

  const updateTodo = (udpatedTodo: Todo) =>
    setTodos([
      ...todos.map((todo: Todo) =>
        todo.id === udpatedTodo.id ? udpatedTodo : todo
      ),
    ]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form onAdd={addTodo} onUpdate={updateTodo} editTodo={editTodo} />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
