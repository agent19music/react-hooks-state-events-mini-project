import React,{useState} from "react";
import Task from "./Task"

function TaskList(props) {
  console.log(props.tasks);
const[tasks,setTasks] = useState(props.tasks);

 const handleDelete = (index) =>{
 const newTasks = [...tasks]
 newTasks.splice(index,1);
   setTasks(newTasks);

 };

 


  return (
    <div className="tasks" >
    {tasks.map((task, index) => (
      <Task 
        key={index}
        name ={task.text}
        category = {task.category}
        onDelete ={() => handleDelete(index)}
      />

    ))}
    </div>
    
  );
}

export default TaskList;
