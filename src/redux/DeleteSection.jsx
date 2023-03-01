import { useState } from "react";
import { delShape } from "./shapes";



const DeleteSection = () => {

    const [title, setTitle] = useState('');

    const handleButton = () => {


        delShape(title);

        setTitle('');

    }


    return (

        <div className="grid grid-cols-6 items-end gap-8 w-full bg-slate-600 p-4 text-slate-200 border-b border-slate-400">
            <h2 className="text-3xl">DELETE</h2>
            <div className="flex gap-8 justify-between items-end w-full col-span-4">
                <div className="flex justify-start gap-4 w-full ">
                    <div className="flex flex-col w-full">
                        <label htmlFor="inputDeleteTitle">Title:</label>
                        <input onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" id='inputDeleteTitle' className="rounded text-slate-800 px-2 py-0.5 w-full" />
                    </div>
                </div>
            </div>


            <button onClick={handleButton} className="bg-slate-700 py-1 px-3 rounded-lg border border-slate-500 hover:border-slate-400 hover:text-slate-50">Enter</button>
        </div>

    )

}



export default DeleteSection;