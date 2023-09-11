import React, { useState } from 'react';

const AddToDo = (props) => {
    const [task,setTask] = useState(""); // храним значение в переменые
    const handleInput = (e)=>{
        setTask(e.target.value);//перезаписывает значение в input
    }

    const handleAdd = ()=>{
        if(!task.trim()){
            alert("input is empty!")
        }
        
            const newTask ={ //значения инпутов
                task: task,
                status:false,
                id:Date.now()
            }
            setTask("")

            props.handleTask(newTask);
    }


    return (
        <div>
            <h2>Add TODO Component</h2>
            <input type='text' onChange={handleInput} value={task}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddToDo;