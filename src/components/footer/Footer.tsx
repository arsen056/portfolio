import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer id='footer' className={s.footer}>
            <div className={`container ${s.footerContainer}`}>
                <h2 className='title-section'>Arsen Vurdikhanov</h2>

                <div className={s.itemsBlock}>
                    <div className={s.imgWrapper}>
                        <img src="https://via.placeholder.com/150" alt=""/>
                    </div>

                    <div className={s.imgWrapper}>
                        <img src="https://via.placeholder.com/150" alt=""/>
                    </div>

                    <div className={s.imgWrapper}>
                        <img src="https://via.placeholder.com/150" alt=""/>
                    </div>

                    <div className={s.imgWrapper}>
                        <img src="https://via.placeholder.com/150" alt=""/>
                    </div>
                </div>
                <p className={s.copyright}>© All rights reserved 2022</p>
            </div>
        </footer>
    );
};

export default Footer;