import React, { useState } from 'react';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'boxicons/css/boxicons.min.css';

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
      featureDescription: // Fixed the key name
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
      featureDescription: // Fixed the key name
        'Showcase your skills, achievements, and projects with a personalized portfolio design tailored to your professional identity. We create visually stunning and user-friendly portfolios that leave a lasting impression.',
    },
    // Add more services as needed
  ];

  const handleReadMoreClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My <span>Services</span></h1>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="services-format">
            <h3>{service.id}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button
              className="services-readmore"
              onClick={() => handleReadMoreClick(service)}
            >
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedService.title}</h2>
            <p>{selectedService.featureDescription}</p> {/* Updated property name */}
            {selectedService.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <i className="bx bx-check"></i>
                <h3>{feature}</h3>
              </div>
            ))}
            <button className="close-popup" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
