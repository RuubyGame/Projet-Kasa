import React, { useState } from 'react';
// import DataLogement from '../data.json'
import '../styles/carrousel.css'
import flecheDroit from '../asset/fleche-vers-la-droite.png'
import flecheGauche from '../asset/fleche-vers-la-gauche.png'

const Carrousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)


    const next = () => {
        if(currentIndex === props.img.length - 1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prev = () => {
        if(currentIndex === 0){
            setCurrentIndex(props.img.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className='carousel-container'>
            <div className='carousel-wrapper'>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {props.img.map((picture, i) =>
                            <img className='carousel_container_img' alt='banniere-page-logement' src={picture} key={i} />
                        )}
                    </div>

                    {
                        props.img.length > 1 && <>
                            <div className='contenant-arrow'>
                                <button onClick={prev} className="left-arrow">
                                    <img className='arrow' src={flecheGauche} alt="placeholder" />
                                </button>

                                <button onClick={next} className="right-arrow">
                                    <img  className='arrow' src={flecheDroit} alt="placeholder" />
                                </button>
                            </div>

                            <div className='counter-img'>
                            <div className='counter-img-background'>{currentIndex + 1} / {props.img.length} </div>
                            </div>

                        </>}
                </div>

            </div>
        </div>
    );
};

export default Carrousel;