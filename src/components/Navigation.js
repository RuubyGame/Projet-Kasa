import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css'
import Logo from '../components/Logo';

const Navigation = () => {
    return (

        <header className='navigation'>
            <Logo />
            <div className='nav-bar'>

                <NavLink className={({ isActive }) => {
                    return isActive ? " active" : "inactive"
                }} to="/">
                    Accueil
                </NavLink>

                <NavLink className={({ isActive }) => {
                    return isActive ? "active" : "inactive"
                }} to="/apropos">
                    A Propos
                </NavLink>
            </div>
        </header>
    );
};



export default Navigation;