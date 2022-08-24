import "./App.css";
import TodoList from "./component/TodoList";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([
    {
      id: "1",
      name: "Sandy",
      isDone: "Done",
    },
    {
      id: "2",
      name: "Kevin",
      isDone: "Done",
    },
    {
      id: "3",
      name: "Jason",
      isDone: "Done",
    },
    {
      id: "4",
      name: "Emma",
      isDone: "Done",
    },
    {
      id: "5",
      name: "JacKer",
      isDone: "Done",
    },
  ]);
  return (
    <div className="App">
      <span className="TextShow">Show Thông Tin</span>
      <table className="TableInfomation">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>IsDone</th>
          <th>Button</th>
        </tr>
      </table>
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
