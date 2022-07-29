import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setToDos((prevToDos) => {
      return [...prevToDos, { id: Math.random().toString(), text }];
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={toDos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

/* Notes:
  We need to describe our props for each component
  
  const toDos = [{ id: "t1", text: "Finish the course!" }];

  setToDos([...toDos, { id: Math.random().toString(), text }]); // works but toDos may not be the latest
*/
