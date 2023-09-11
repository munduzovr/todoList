import { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/Todolist/ToDoList";



function App() {
  let [todos,setTodos] = useState([]) //создадим состояние , создаем в App.js т.к. должны передавать позже в дргуие компоненты .Создаем пустой массив в котором будем сохранять объекты один объект одна todo
  
  function handleTask(newObj){
      let newTodos = [...todos]//в массив сохраняется todo
      newTodos.push(newObj);
      setTodos = newTodos;
      console.log(newTodos)
  }
  return (
    <div>
      <AddToDo handleTask={handleTask}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
