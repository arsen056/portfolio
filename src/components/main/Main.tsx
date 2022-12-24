import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <section id='main' className={s.main}>
            <div className={`container ${s.mainContainer}`}>
                <h1 className={s.greetings}>
                    Hello! My name is Arsen I'm frontend developer
                </h1>
                <div className={s.imgWrapper}><img src="https://via.placeholder.com/300x400" alt="photo"/></div>

            </div>
        </section>
    );
};

export default Main;