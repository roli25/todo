import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodosList from "./Components/TodosList";
//const TodosList = React.lazy(() => import("./Components/TodosList"));

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const updateTodo = (udpatedTodo) =>
    setTodos([
      ...todos.map((todo) => (todo.id === udpatedTodo.id ? udpatedTodo : todo)),
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
