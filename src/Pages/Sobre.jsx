import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


function Sobre() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    const [seachParams] = useSearchParams();
    const title = seachParams.get("title");
    const description = seachParams.get("description");
    return (
        <div className="bg-gray-400 h-screen w-screen flex flex-col items-center">
            <div className="w-[300px] sm:w-[500px]">
                <div className="relative flex justify-center items-center flex-row-reverse m-4">
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold m-2">Descrição da tarefa</h1>
                
                    <button onClick={goBack} className="absolute left-0"><ArrowLeft /></button>
                </div>

                <div className="space-y-6 bg-white p-4 rounded-md">
                    <p className="m-0 text-lg font-bold text-gray-600">{title}</p>
                    <p className="text-gray-500">{description}</p>
                </div>

            </div>
        </div>
    )
}

export default Sobre;