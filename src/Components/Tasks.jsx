import { ArrowRight, Trash2 } from "lucide-react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"



function Tasks(tasks) {
    const navigate = useNavigate();
    const travelPage = (task) => {
        navigate(`/sobre?title=${task.title}&description=${task.description}`)
    }
    const [max, setMax] = useState(20)

    useEffect(() => {
        const updateMax = () => {
            const largura = window.innerWidth;
            if (largura < 640) {
                setMax(15)
            } else {
                setMax(41)
            }
        };
        updateMax()
        window.addEventListener("resize", updateMax)
        return () => window.removeEventListener("resize", updateMax);
    }, [])

    function brokenText(text) {
        const parts = []
        for (let i = 0; i < text.length; i+= max) {
            parts.push(text.slice(i, i + max))
        }
        return parts
    }
    
    return(
            <ul className="bg-white p-6 rounded-md space-y-6">
                {tasks.tasks.map((task) => (
                    <li key={task.id} className="flex flex-row">
                        
                        <button
                        onClick={() => tasks.toggleComplete(task.id)}
                        className={`bg-slate-300 w-full flex flex-col rounded-sm p-2 ${task.completed ? "line-through" : ""} `}>
                        {brokenText(task.title, max).map((parts, i) => (
                            <span key={i}>{parts}</span>
                        ))}</button>

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
