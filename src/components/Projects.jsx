import React from 'react'
import '../styles/Projects.css'
import project1 from "../assets/Project1.png"
// import project2 from "../assets/cv.png"
const Projects = () => {
    return (
        <div id='portfolio' className='mywork'>
            <div className='mywork-title'>
                <h1>My<span>Projects</span></h1>
            </div>
            <div className='mywork-container'>
                <div className='items'>
                    <a href='https://popappz.com/'>
                        <img src={project1} alt='project' />
                    </a>
                </div>
                {/* <div className='items'>
                    <a href='#'>
                        <img src={project2} alt='project' />
                    </a>
                </div> */}
            </div>

        </div>
    )
}

export default Projects
