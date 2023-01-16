import { PropertySignature } from "typescript";
import { Todo } from "../Components/Interfaces/todo";

const TodosList = ({ ...props }) => {
  const handleComplete = (todo: Todo) => {
    props.setTodos(
      props.todos.map((item: Todo) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = (item: Todo) => {
    const findTodo = props.todos.find((todo: Todo) => todo.id === item.id);
    props.setEditTodo(findTodo);
  };
  const handleDelete = (item: Todo) => {
    props.setTodos(props.todos.filter((todo: Todo) => todo.id !== item.id));
  };
  return (
    <div>
      {props.todos.map((todo: Todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
      ;
    </div>
  );
};
export default TodosList;
