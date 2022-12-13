import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <section id='contacts' className={s.contacts}>
            <div className={`container ${s.contactsContainer}`}>
                <h2 className='title-section'>My skills</h2>
                <div className={s.formContainer}>
                    <form className={s.form} action="">
                        <label htmlFor="name">
                            <span className={s.inputLabel}>Your name:</span>
                            <input className='input-text' name='name' type="text" required={true}/>
                        </label>

                        <label htmlFor="number">
                            <span className={s.inputLabel}>Tel number:</span>
                            <input className='input-text' name='number' type="number" required={true}/>
                        </label>

                        <label htmlFor="e-mail">
                            <span className={s.inputLabel}>E-mail:</span>
                            <input className='input-text' name="e-mail" type="text" required={true}/>
                        </label>

                        <button className='button'>Submit</button>

                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contacts;