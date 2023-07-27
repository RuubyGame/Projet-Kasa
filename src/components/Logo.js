import React from 'react';
import '../styles/logo.css'
import logo from "../asset/LOGO.png";

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo Kasa' className='logo-width'/>
        </div>
    );
};

export default Logo;