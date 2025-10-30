import { useEffect, useState } from "react"
import AddTask from "./Components/AddTask"
import Tasks from "./Components/Tasks"
import { v4 as uuidv4 } from 'uuid';



function App() {
 const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
 }, [tasks])

 const addTask = (title, description) => {
  const newTask = {
    id: uuidv4(),
    title,
    description,
    completed: false
  }
  setTasks([...tasks, newTask])
 }

 const deleteTask = (id) => {
    setTasks(e => e.filter(task => task.id !== id))
 }

 const toggleComplete = (id) => {
  setTasks(e => 
    e.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task
    )
  )
 }

  return (
    
    <>
      <div className="bg-gray-400 sm:h-screen sm:w-screen flex flex-col items-center p-4">
        <div className="w-[300px] sm:w-[500px]">
          <h1 className="text-gray-800 text-2xl sm:text-3xl flex sm:justify-center font-bold m-5">Gerenciador de tarefas</h1>
          <AddTask addTask={addTask}/>
          <Tasks tasks={tasks} removeTask={deleteTask} toggleComplete={toggleComplete}/>
        </div>
        
      </div>
    </>
  )
}

export default App
