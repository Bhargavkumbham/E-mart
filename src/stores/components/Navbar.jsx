import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'    
const Navbar = () => {
    const{cartItems}=useCart();
  return (
    <>
    <div className='navSection'>
        <div className="title">
            <h1>E-Mart</h1>
        </div>
        <div className="searchBox">
            <input type="text" placeholder='Search...'/>
        </div>
        <div className="user">
            <div className="user-details">
                Login/SignUp
            </div>
            <Link to='/cart'>
            <div className="cart">
            Cart<span>{cartItems.length}</span>
            </div>
            </Link>
        </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to='/mobiles' className="navLink"><li>
            <li>Mobiles</li>
            </li></Link>
            <Link to='/computers' className="navLink">
            <li>Computers </li>
            </Link>
            <Link to='/books' className="navLink">
            <li>Books</li>
            </Link>
            <Link to='/fridges' className="navLink">
            <li>Fridges</li>
            </Link>
            <Link to='/ac' className="navLink">
            <li>Ac</li>
            </Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar