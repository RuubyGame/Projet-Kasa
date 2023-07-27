import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css'
import Logo from '../components/Logo';

const Navigation = () => {
    return (
        <header className='navigation'>
            <Logo />
            <div className='nav-bar'>
                <div>
                <NavLink to="/" className="inactive active">
                    Accueil
                </NavLink>
                </div>
                <div>
                <NavLink to="apropos" className="inactive active">
                    A Propos
                </NavLink>
                </div>
            </div>
        </header>
    );
};



export default Navigation;