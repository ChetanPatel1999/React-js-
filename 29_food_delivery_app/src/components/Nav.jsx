import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { DataContext } from '../context/UserContext';
import { food_items } from '../food';
const Nav = ({totalQuantity}) => {
    let { input, setinput, foodCategories, setfoodCategories, showCard, setshowCard } = useContext(DataContext);

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()))
        setfoodCategories(newList);
    }, [input])

    return (
        <div className='w-full h-25 flex justify-between items-center px-5 md:px-8'>
            <div className='w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-7.5 h-7.5 text-green-500' />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='h-15 w-[40%] md:w-[70%] bg-white flex items-center px-5 gap-5 rounded-md shadow-md' >
                <IoSearch className='text-green-500 text-2xl' />
                <input
                    onChange={(e) => setinput(e.target.value)}
                    className='w-full outline-none text-sm md:text-lg' placeholder='Search items...'
                    title={input} />
            </form>
            <div
                onClick={() => setshowCard(true)}
                className='w-15 cursor-pointer h-15 bg-white flex justify-center items-center rounded-md shadow-xl relative'>
                <span className='absolute top-0 right-2 font-bold text-lg text-green-500'>{totalQuantity}</span>
                <LuShoppingBag className='w-7.5 h-7.5 text-green-500' />
            </div>
        </div>
    )
}

export default Nav
