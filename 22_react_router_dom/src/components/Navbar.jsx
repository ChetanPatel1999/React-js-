import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <h1>Hello Wolrd Institute</h1>
            <div className='box'>
                {/* because its relode website for next page */}
                {/* <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a> */}

                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
                <Link to='/courses'>Courses</Link>
            </div>
        </div>
    )
}

export default Navbar
