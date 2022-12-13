import React from 'react';
import s from './Offer.module.css'

const Offer = () => {
    return (
        <section id='offer' className={s.offer}>
            <div className={`container ${s.offerContainer}`}>
                <h2 className='title-section'>Considering remote work options</h2>
                <button className={'button'}>Contact with me</button>
            </div>
        </section>
    );
};

export default Offer;