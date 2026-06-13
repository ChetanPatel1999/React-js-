import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute left-0 top-0  w-full h-full flex flex-col justify-between p-8'>
            <h2 className='font-bold bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-sm leading-relaxed font-semibold text-white pr-12'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  consectetur adipisicing elit. Nostrum, architecto.</p>
                <div className='flex justify-between items-center mt-8'>
                    <button style={{backgroundColor:props.color}} className=' bg-blue-600 text-white px-6 py-2 rounded-full font-medium'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' bg-blue-600 text-white px-3 py-2 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
