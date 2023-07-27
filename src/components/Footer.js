import React from 'react';
import '../styles/footer.css'
import logoFooter from "../asset/LOGO-BLANC.png";

const Footer = () => {
    return (
        <div>
            <div className='footer-Background'>
                <div className='footer-contenant-img'>
                    <img src= {logoFooter} alt='Logo Kasa' className='footer-Logo' />
                </div>
                <div className='text-Footer'>© 2020 Kasa. All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;