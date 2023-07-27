import React from 'react';
import Data from '../data.json'
import Cards from './Cards';
import '../styles/logements.css'


const Logements = () => {
    return (
        <div className='cardBackground'>
            {Data.map(data=>{
                return(
                    <Cards
                    key = {data.id}
                    id= {data.id}
                    title={data.title}
                    cover={data.cover}
                    />
                )
            })}
        </div>
    );
};

export default Logements;