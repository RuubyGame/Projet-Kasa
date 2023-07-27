import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css'

const card = ({id, title, cover}) => {
    return (
        <Link to = {`/logement/${id}`} className='card-Background'>
            <img src={cover} alt={title} className='img-Card'/>
            <h3 className='text-card'>{title}</h3>
        </Link>
    );
};

export default card;