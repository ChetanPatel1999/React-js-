import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
    <div>
      <h1>Product Page</h1>
      <Link to='men'>Men</Link>
      <Link to='women'>Women</Link>
       <Outlet />
    </div>
   
    )
}

export default Product
