import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Erreur404.css';

const Erreur404 = () => {
    return (
        <div>
            <div className='Erreur-Flex'>
            <p className='Erreur404'>404</p>
            <h1 className='Erreur-Txt'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link className='Erreur-Link' to= '/'>Retourner à la page d'accueil</Link>
            </div>
        </div>
    );
};

export default Erreur404;