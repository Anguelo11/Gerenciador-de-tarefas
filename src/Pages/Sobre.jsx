import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


function Sobre() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
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

    const [seachParams] = useSearchParams();
    const title = seachParams.get("title") || "";
    const description = seachParams.get("description");
    return (
        <div className="bg-gray-400 h-screen w-screen flex flex-col items-center">
            <div className="w-[300px] sm:w-[500px]">
                <div className="relative flex justify-center items-center flex-row-reverse m-4">
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold m-2">Descrição da tarefa</h1>
                
                    <button onClick={goBack} className="absolute left-0"><ArrowLeft /></button>
                </div>

                <div className="space-y-6 bg-white p-4 rounded-md
                break-words ">
                    <p className="m-0 text-lg font-bold text-gray-600">{brokenText(title).map((parts, i) => (
                            <span key={i}>{parts}</span>
                        ))}</p>
                    <p className="text-gray-500">{description}</p>
                </div>

            </div>
        </div>
    )
}

export default Sobre;