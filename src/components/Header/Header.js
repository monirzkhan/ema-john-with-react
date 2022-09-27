
import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'



const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Product">Product</a>
                <a href="/Overview">Overview</a>
                <a href="/Cart">Cart</a>
            </div>
        </div>
    );
};

export default Header;