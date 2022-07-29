import React from "react";
import "./TodoList.css";

// Describe props object
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

// Within <> we can provide structure of our props
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
