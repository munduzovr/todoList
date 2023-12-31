import React, { useState } from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";
import EditTodo from "./component/EditToDo/EditToDo";

const App = () => {
  // создадим состояние, создаем в App.js компоненте
  const [todos, setTodos] = useState([]);
  const [editedObj, setEditedObj] = useState(null)
  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }
  function deleteTask(id) {
    let delTodos = todos.filter((task) => task.id !== id);
    setTodos(delTodos);
  }
  function getEditedObj (id) {
    let oneObj = todos.find((item) => item.id === id)
    setEditedObj(oneObj)
  }
  function saveChanges(newObj) {
    let newTodos = [...todos]
    newTodos = newTodos.map((item) => {
      if(item.id === newObj.id) {
        return newObj
      } else {
        return item
      }
    })
    setTodos(newTodos)
    setEditedObj(null)
  }
  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList deleteTask={deleteTask} todos={todos} getEditedObj={getEditedObj}/>
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges}/>
      ) : null
      }
    </div>
  );
};

export default App;