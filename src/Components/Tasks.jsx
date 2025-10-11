import { ArrowRight, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"



function Tasks(tasks) {
    const navigate = useNavigate();
    const travelPage = (task) => {
        navigate(`/sobre?title=${task.title}&description=${task.description}`)
    }
    
    return(
            <ul className="space-y-6 bg-white p-6 rounded-md ">
                {tasks.tasks.map((task) => (
                    <li key={task.id} className="flex flex-row">
                        
                        <button
                        onClick={() => tasks.toggleComplete(task.id)}
                        className={`bg-slate-300 w-full flex rounded-sm p-2 ${task.completed ? "line-through" : ""}`}>
                        {task.title}</button>

                        <button 
                        onClick={() => travelPage(task)}
                        className="bg-slate-300 rounded-sm p-2 ml-3"><ArrowRight /></button>

                        <button
                        onClick={() => tasks.removeTask(task.id)}
                        className="bg-slate-300 rounded-sm p-2 ml-3"><Trash2/></button>
                        
                    </li>
                ))}
            </ul>

    )
}
export default Tasks
