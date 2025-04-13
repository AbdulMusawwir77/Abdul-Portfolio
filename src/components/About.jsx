import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import cvImage from '../../src/assets/cv.png';
import cv from "../assets/PDF/Abdul Resume.pdf"
const About = () => {
    return (
        <motion.div 
            id='about' 
            className='about'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <span>About</span>Me
            </motion.h1>

            <motion.div 
                className='about-sections'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <motion.div 
                    className='about-left'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <img src={cvImage} alt='My CV' />
                </motion.div>

                <motion.div 
                    className='about-right'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <div className='about-para'>
                        <p>Hi, I’m Abdul Musawwir, a web developer passionate about creating innovative and user-friendly websites. I specialize in Front-End Development, Responsive Design, Web Optimization.</p>
                    </div>
                    <div className='about-para'>
                        <p>As a 17-year-old developer, I bring fresh energy and creativity to every project. My journey began with a fascination for technology and quickly grew into a deep commitment to mastering the art of web development. Over time, I’ve honed my skills in designing responsive layouts, optimizing website performance, and writing clean, efficient code.</p>
                    </div>
                    <motion.a 
                        className='about-connect'
                        href={cv}
                        download={'Abdul_Musawwir_Resume.pdf'}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px #B415FF" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
