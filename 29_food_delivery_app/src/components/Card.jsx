import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { toast } from 'react-toastify';
const Card = ({ addToCart, quantity, name, image, id, price, type }) => {
    return (
        <div className=' w-65  bg-white h-80 shadow-lg p-2 flex flex-col gap-5 rounded-md hover:border-green-500 hover:border cursor-pointer'>
            <div className='h-40 overflow-hidden  rounded-md '>
                <img className='object-cover' src={image} />
            </div>
            <div className='font-bold text-xl'>
                {name}
            </div>
            <div className='flex justify-between'>
                <div className='text-green-500 font-medium'>
                    Rs {price} /-
                </div>
                <div className='flex justify-center items-center gap-2 text-green-500 font-medium'>{type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />}<span>{type}</span></div>
            </div>
            <button
                onClick={() => {
                    addToCart({ quantity, id, price, image, name });
                    toast.success(name + " added..")
                }}
                className='bg-green-500 transition-all duration-200 rounded-md py-1 text-white font-medium cursor-pointer hover:bg-green-400 '>Add to Dish</button>
        </div>
    )
}

export default Card
