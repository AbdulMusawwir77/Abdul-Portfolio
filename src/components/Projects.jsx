import React from 'react';
import '../styles/Projects.css';
import project1 from "../assets/Project1.png";
// import project2 from "../assets/cv.png";

const Projects = () => {
    return (
        <div id='portfolio' className='mywork'>
            <div className='mywork-title'>
                <h1>My<span>Projects</span></h1>
            </div>
            <div className='mywork-container'>
                <div className='items'>
                    <a href='https://popappz.com/' target="_blank" rel="noopener noreferrer">
                        <div className='img-wrapper'>
                            <img src={project1} alt='project' className="bouncing" />
                        </div>
                    </a>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Projects;
