import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='navSection'>
        <div className="title">
            <h1>E-Mart</h1>
        </div>
        <div className="searchBox">
            <input type="text" placeholder='Search for products'/>
        </div>
        <div className="user">
            <div className="user-details">
                Login/SignUp
            </div>
            <Link to='/cart'>
            <div className="cart">
            <h3>Cart</h3>
            </div>
            </Link>
        </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to='/mobiles'><li>
            <li>Mobiles</li>
            </li></Link>
            <Link to='/computers'>
            <li>Computers </li>
            </Link>
            <Link to='/books'>
            <li>Books</li>
            </Link>
            <Link to='/fridges'>
            <li>Fridges</li>
            </Link>
            <Link to='/ac'>
            <li>Ac</li>
            </Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar