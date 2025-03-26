import React, { useState } from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "eff8fd4f-1e61-4acf-8398-302de06237de");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert("Message sent successfully!");
                event.target.reset();
            } else {
                setResult(`Error: ${data.message}`);
            }
        } catch (error) {
            setResult("Error: Unable to send the message. Please try again later.");
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>
                        I'm currently available for new projects, so feel free to send me a
                        message about anything you'd like me to work on. You can contact me anytime.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                            <p>abdmusawwir77@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
                            <p>+916282030645</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
                            <p>Thoothukudi, Tamil Nadu, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter Your Name" name="name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" name="email" required />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Enter Your Message"
                        required
                    />
                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
