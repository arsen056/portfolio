import React from 'react';
import s from './Projects.module.css'

const Projects = () => {
    return (
        <section id='projects' className={s.MyProjects}>
            <div className="container">
                <h2 className='title-section'>My projects</h2>

                <div className={s.projectList}>
                    <div className={s.projectItem}>
                        <div className={s.projectImg}>
                            <img src="https://via.placeholder.com/500x400" alt=""/>
                            <button className={`button ${s.projectBtn}`}>Show more</button>
                        </div>

                        <div className={s.projectInfo}>
                            <h3 className={s.projectTitle}>Project 1</h3>
                            <p className={s.projectDescr}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>

                    <div className={s.projectItem}>
                        <div className={s.projectImg} >
                            <img src="https://via.placeholder.com/500x400" alt=""/>
                            <button className={`button ${s.projectBtn}`}>Show more</button>
                        </div>

                        <div className={s.projectInfo}>
                            <h3 className={s.projectTitle}>Project 1</h3>
                            <p className={s.projectDescr}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;