import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
const TodoList = (props) => {
  let { todo, setTodo} = props;
  const [todoList, setTodoList] = useState(todo);
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
    console.log(newTodoList);
  };
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem id = {todo.id} key={todo.id} name={todo.name} isDone={todo.isDone} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default TodoList;
