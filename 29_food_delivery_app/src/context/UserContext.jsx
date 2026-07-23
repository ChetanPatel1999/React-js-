import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const DataContext = createContext();
const UserContext = ({ children }) => {
    const [input, setinput] = useState("")
    const [foodCategories, setfoodCategories] = useState(food_items)
    const [showCard, setshowCard] = useState(false)
    const data = {
        input, setinput,foodCategories,setfoodCategories,showCard,setshowCard
    }
    return (
        <div>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>

        </div>
    )
}

export default UserContext
