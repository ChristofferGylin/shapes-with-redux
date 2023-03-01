import { useState } from "react";
import { updateShape } from "./shapes";



const UpdateSection = () => {

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    const handleButton = () => {


        updateShape({
            color: color.toLowerCase(),
            title: title.toLowerCase(),
        });

        setTitle('');
        setColor('');
    }


    return (

        <div className="grid grid-cols-6 items-end gap-8 w-full bg-slate-600 p-4 text-slate-200 border-b border-slate-400">
            <h2 className="text-3xl">UPDATE</h2>
            <div className="flex gap-8 justify-between items-end w-full col-span-4">
                <div className="flex justify-start gap-4 w-full ">
                    <div className="flex flex-col w-full">
                        <label htmlFor="inputUpdateTitle">Title:</label>
                        <input onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" id='inputUpdateTitle' className="rounded text-slate-800 px-2 py-0.5 w-full" />
                    </div>
                </div>
                <div className="flex justify-start gap-4 w-full ">
                    <div className="flex flex-col w-full">
                        <label htmlFor="inputUpdateColor">Color:</label>
                        <input onChange={(e) => { setColor(e.target.value) }} value={color} type="text" id='inputUpdateColor' className="rounded text-slate-800 px-2 py-0.5 w-full" />
                    </div>
                </div>

            </div>
            <button onClick={handleButton} className="bg-slate-700 py-1 px-3 rounded-lg border border-slate-500 hover:border-slate-400 hover:text-slate-50">Enter</button>

        </div>

    )

}



export default UpdateSection;