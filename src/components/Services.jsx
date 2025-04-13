import React, { useState } from 'react';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'boxicons/css/boxicons.min.css';
import { motion } from 'framer-motion'; // Importing Framer Motion

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Creating responsive , modern websites.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Maintenance and Support',
      ],
      featureDescription:
        'Crafting responsive, user-friendly, and visually appealing websites tailored to your business needs. From custom designs to seamless functionality, we build websites that leave a lasting impression. Our services include:',
    },
    {
      id: 2,
      title: 'Portfolio Design',
      description: 'Building user-friendly Portfolio Designs.',
      features: [
        'Custom Portfolio Website Development',
        'Creative and Minimalist UI/UX Design',
        'Integration with Blogs, Galleries, or Case Studies',
        'Mobile-Responsive Layouts',
      ],
      featureDescription:
        'Showcase your skills, achievements, and projects with a personalized portfolio design tailored to your professional identity. We create visually stunning and user-friendly portfolios that leave a lasting impression.',
    },
  ];

  const handleReadMoreClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="services">
      <motion.div
        className="services-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          My <span>Services</span>
        </h1>
      </motion.div>

      <motion.div
        className="services-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="services-format"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{service.id}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <motion.button
              className="services-readmore"
              onClick={() => handleReadMoreClick(service)}
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px #B415FF' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {selectedService && (
        <motion.div
          className="popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="popup-content" initial={{ y: -50 }} animate={{ y: 0 }}>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.featureDescription}</p>
            {selectedService.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <i className="bx bx-check"></i>
                <h3>{feature}</h3>
              </div>
            ))}
            <motion.button
              className="close-popup"
              onClick={handleClosePopup}
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px #B415FF' }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
