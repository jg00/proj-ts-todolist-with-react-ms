import React, { useRef } from "react";

import "./NewTodo.css";

// Describe props object
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

// Within <> we can provide structure of our props
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null); // Describe the ref

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText); // Send data up the component ie to App.tsx
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;

/* Notes on useRef(null)
  1. During setup this line of code "const textInputRef = useRef<HTMLInputElement>(null);"
  will execute first and we should initialize to null.

  - When the NewToDo component gets rendered for the very first time ie when this code
  executes of course the return{ <form> ..} hasn't been rendered yet so then
  useRef<HTMLInputElement>(null) will not point at anything and that is why we 
  need to describe the generic type and that it will be null initially.

  - Once the <form> has been rendered however the 'connection' between the 
  ref and the input element will be 'established' and only then will the ref work.

*/
