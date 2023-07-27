import React, { useState } from 'react';
import "../styles/Collapsibles.css"
import angleUp from '../asset/fleche-vers-le-haut.png'
import angleDown from '../asset/fleche-blanche-bas.png'

const Collapsible = ({ title, description }) => {
    const [open, setOPen] = useState(false);

    return (
        <div className="collapsible-contenant">
            <div className='collapsible-contenant-button'>
                <div className="collapsible-button" onClick={() => setOPen(!open)}>
                    <p className='text-button'>{title}</p>
                    {!open ?<img src={angleDown} alt='fleche du bas' className='arrowDown'/> : <img src={angleUp} alt='fleche du haut' className='arrowUp'/> }
                </div>
            </div>
            {open && (
                    <div className='text-contenant'>
                        <p className='text-description'>{description} </p>
                    </div>
            )}
        </div>
    );
};


export default Collapsible;





