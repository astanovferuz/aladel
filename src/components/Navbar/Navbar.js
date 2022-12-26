import React from 'react';
import logoPic from '../../assets/aladellogo.png'
const Navbar = () => {
    return(
        <div className='custom_navbar'>
            <div className='custom_navbar_brand'>
                <img className='custom_image' src={logoPic} alt="logo" />
                <p className='custom_brand_name'>Al Adel Debt Collection</p>
            </div>
            <ul className='custom_nav_list'>
                <li className='custom_nav_item'><a className='custom_nav_link' href="#">Home</a></li>
                <li className='custom_nav_item'><a className='custom_nav_link' href="#">About Us</a></li>
                <li className='custom_nav_item'><a className='custom_nav_link' href="#">Services</a></li>
                <li className='custom_nav_item'><a className='custom_nav_link' href="#">Search</a></li>
                <li className='custom_nav_item'><a className='custom_nav_link' href="#">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Navbar;