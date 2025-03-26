import React from 'react'
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import homeImage from '../assets/Home.PNG'; // Correct import for the image file
const Home = () => {
    return (
        <div id='home' className='home'>
            <img src={homeImage} alt="Home" />
            <h1><span>Hi,I'm Abdul Musawwir</span></h1>
            <h2>Web Developer | Front-End</h2>
            <div className="social-icons">
                    <a href="https://linkedin.com/in/abdul-musawwir-7a715a322">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/__.abdul__/">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            <a href="https://wa.me/+916282030645?text=Hello!" className="home-connect">
                <FontAwesomeIcon className='icons' icon={faWhatsapp} /> Let's Talk
                </a>
        </div>
    )
}

export default Home
