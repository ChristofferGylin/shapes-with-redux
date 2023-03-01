import { useState } from "react";
import { createShape } from "./shapes";



const CreateSection = () => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');

    const handleButton = () => {


        createShape({
            color: color.toLowerCase(),
            type: type.toLocaleLowerCase(),
            title: title,
            id: Date.now()
        });

        setTitle('');
        setType('');
        setColor('');
    }


    return (

        <div className="grid grid-cols-6 items-end gap-8 w-full bg-slate-600 p-4 text-slate-200 border-b border-slate-400">
            <h2 className="text-3xl">CREATE</h2>
            <div className="flex gap-8 justify-between items-end w-full col-span-4">
                <div className="flex justify-start gap-4 w-full ">
                    <div className="flex flex-col w-full">
                        <label htmlFor="inputCreateTitle">Title:</label>
                        <input onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" id='inputCreateTitle' className="rounded text-slate-800 px-2 py-0.5 w-full" />
                    </div>
                </div>
                <div className="flex justify-start gap-4 w-full ">
                    <div className="flex flex-col w-full">
                        <label htmlFor="inputCreateType">Type:</label>
                        <input onChange={(e) => { setType(e.target.value) }} value={type} type="text" id='inputCreateType' className="rounded text-slate-800 px-2 py-0.5 w-full" />
                    </div>
                </div>
                <div className="flex justify-start gap-4 w-full ">
                    <div className="flex flex-col w-full">
                        <label htmlFor="inputCreateColor">Color:</label>
                        <input onChange={(e) => { setColor(e.target.value) }} value={color} type="text" id='inputCreateColor' className="rounded text-slate-800 px-2 py-0.5 w-full" />
                    </div>
                </div>
            </div>
            <button onClick={handleButton} className="bg-slate-700 py-1 px-3 h-8 rounded-lg border border-slate-500 hover:border-slate-400 hover:text-slate-50">Enter</button>

        </div>

    )

}



export default CreateSection;