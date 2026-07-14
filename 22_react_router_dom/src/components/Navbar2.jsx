import React from 'react'
import { useNavigate } from 'react-router-dom'  

const Navbar2 = () => {
   const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>return to home</button>
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate(+1)}>next</button>
        </div>
    )
}

export default Navbar2
