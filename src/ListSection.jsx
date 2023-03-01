import { BsCircleFill, BsFillTriangleFill, BsFillSquareFill } from 'react-icons/bs';

import { useShapes } from "./redux/shapes"
const ListSection = () => {

    const colors = {
        blue: 'text-blue-500',
        red: 'text-red-500',
        yellow: 'text-yellow-500',
        green: 'text-green-500',
    }

    const icons = {

        circle: BsCircleFill,
        square: BsFillSquareFill,
        triangle: BsFillTriangleFill
    }

    return (

        <div>
            <ul>
                <li className='grid grid-cols-4 text-lg font-semibold items-center gap-4 border-b border-slate-700  p-4'><div>Title</div><div>Type</div><div>Color</div></li>
                {useShapes().shapes.map((shape) => {

                    let Icon;

                    if (icons[shape.type] !== undefined) {

                        Icon = icons[shape.type];

                    } else {

                        Icon = icons['circle'];

                    }

                    let color;

                    if (colors[shape.color] !== undefined) {

                        color = colors[shape.color];

                    } else {

                        color = colors['blue'];

                    }


                    return (
                        <li key={shape.id} className='grid grid-cols-4 text-lg items-center gap-4 border-b border-slate-500 p-4'>
                            <div>{shape.title}</div>
                            <div>{shape.type}</div>
                            <div>{shape.color}</div>
                            <div><Icon className={`${color} text-2xl`} /></div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListSection;