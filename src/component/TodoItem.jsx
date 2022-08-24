import React from "react";

const TodoItem = (props) => {
  let { id, name, isDone, handleDelete } = props;
  return (
    <div key={id} style = {{ display: 'flex'}} className="Infomation">
        <div>{id}</div>
        <div>{name}</div>
        <div>{isDone}</div>
        <button onClick={() => handleDelete(id)}>Delete </button>
    </div>
  );
};

export default TodoItem;
