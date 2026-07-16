import React from 'react'

const Navbar = (props) => {
    console.log(props)
    return (
        <div>
            <h1>color : {props.theme}</h1>
            <button onClick={() => {
                props.settheme("dark");
            }} >change theme</button>
        </div>
    )
}

export default Navbar
