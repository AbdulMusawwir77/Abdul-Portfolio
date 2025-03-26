import React from 'react'
import '../styles/About.css'
import cvImage from '../../src/assets/cv.png'
const About = () => {
    return (
        <div id='about' className='about'>
            <h1><span>About</span>Me</h1>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={cvImage} alt='' />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>
                            Hi, I’m Abdul Musawwir, a web developer passionate about creating innovative and user-friendly websites. I specialize in Front-End Development, Responsive Design, Web Optimization.
                        </p>
                    </div>
                    <div className='about-para'>
                        <p>
                            As a 17-year-old developer, I bring fresh energy and creativity to every project. My journey began with a fascination for technology and quickly grew into a deep commitment to mastering the art of web development. Over time, I’ve honed my skills in designing responsive layouts, optimizing website performance, and writing clean, efficient code.
                        </p>
                    </div>
                    <button className='about-connect'>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default About
