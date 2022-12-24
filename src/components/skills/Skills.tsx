import React from 'react';
import s from './Skills.module.css'

const Skills = () => {
    return (
        <section id='skills' className={s.skills}>
            <div className={`container ${s.skillsContainer}`}>
                <h2 className='title-section'>My skills</h2>

                <div className={s.skillList}>
                    <div className={s.skillItem}>
                        <div className={s.imgWrapper}>
                            <img src="https://via.placeholder.com/150" alt="skill img"/>
                        </div>
                        <h3 className={s.skillTitle}>React</h3>
                        <p className={s.skillDescription}>A JavaScript library for building user interfaces</p>
                    </div>
                    <div className={s.skillItem}>
                        <div className={s.imgWrapper}>
                            <img src="https://via.placeholder.com/150" alt="skill img"/>
                        </div>

                        <h3 className={s.skillTitle}>React</h3>
                        <p className={s.skillDescription}>A JavaScript library for building user interfaces</p>
                    </div>
                    <div className={s.skillItem}>
                        <div className={s.imgWrapper}>
                            <img src="https://via.placeholder.com/150" alt="skill img"/>
                        </div>
                        <h3 className={s.skillTitle}>React</h3>
                        <p className={s.skillDescription}>A JavaScript library for building user interfaces</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;