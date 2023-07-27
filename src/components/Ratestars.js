import React from 'react';
import '../styles/RateStars.css'
import emptyStar from '../asset/star empty.svg'
import fullStar from '../asset/Star full.svg'


const Ratestar = ({ score }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className='background-star'>
            {stars.map ((level)=>
                score >= level ? (

                    
                    <img
                    key={level.toString()}
                    className='starFull'
                    src={fullStar}
                    alt='rating star'
                    />
                ) : (
                    <img
                    key={level.toString()}
                    className='starFull'
                    src={emptyStar}
                    alt='rating star'
                    />
                )
            )}
        </div>
    );
};

export default Ratestar;