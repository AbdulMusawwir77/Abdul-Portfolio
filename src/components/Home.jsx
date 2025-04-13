import React from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion';
import icon from "../assets/Icon.jpeg"

const Home = () => {
    return (
        <motion.div 
            id='home' 
            className='home'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.img 
                src={icon}
                alt="Home" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                <span>Hi, I'm Abdul Musawwir</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
            >
                Web Developer | Front-End
            </motion.h2>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
            >
                HTML | CSS | JAVASCRIPT | REACT JS
            </motion.h2>

            <motion.div 
                className="social-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <motion.a 
                    href="https://linkedin.com/in/abdul-musawwir-7a715a322"
                    target="_blank"
                    whileHover={{ scale: 1.3, y: -5, boxShadow: '0 0 15px #B415FF', border: 'none' }}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </motion.a>
                <motion.a 
                    href="https://www.instagram.com/__.abdul__/"
                    target="_blank"
                    whileHover={{ scale: 1.3, y: -5, boxShadow: '0 0 15px #B415FF', border: 'none' }}
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </motion.a>
            </motion.div>

            <motion.a 
                href="https://wa.me/+916282030645?text=Hello!" 
                target="_blank"
                className="home-connect"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #B415FF" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <FontAwesomeIcon className='icons' icon={faWhatsapp} /> Let's Talk
            </motion.a>
            <hr/>
        </motion.div>
    );
}

export default Home;
