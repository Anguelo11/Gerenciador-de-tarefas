import { useState } from "react"


function AddTask({ addTask }) {
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")

        const handleAdd = () => {
            if (title.trim() && description.trim()) {
                addTask(title, description);
                setDescription("");
                setTitle("");
            }
        }
    
    return (
        <>
            <div className="bg-white rounded-md space-y-6 flex flex-col justify-center p-5 mb-4">

                <input
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-200 rounded-sm p-4 mb-4" type="text"
                value={title}
                placeholder="Digite sua tarefa" />

                <input 
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-200 rounded-sm p-4 mb-4" type="text"
                value={description} 
                placeholder="Digite a descrição da tarefa" />

                <button 
                onClick={handleAdd}
                className="bg-slate-300 py-2 rounded-sm">Adicionar tarefa</button>
            </div>
        </>
    )
}

export default AddTask