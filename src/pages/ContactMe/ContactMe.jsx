import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Typography } from '@mui/material';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vluynli', 'service_vluynli', form.current, 'u7iytDz-H2tU-7e5I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box id="contact" >
        <Typography variant="h3" align="center" className="contact-title"> Let's get to know eachother </Typography>
        {/*left panel*/}
        <Box className="contact-me-wrapper"> 
            <Box className="contact-me-left">
                <Typography variant="h5"> Tell me more about you... </Typography>
                <form ref={form} onSubmit={sendEmail} className="contact-me-form">
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className="send-form-btn"/>
                </form>
            </Box>
            {/*right panel*/}
            <Box className="contact-me-right">
                <Typography variant="h5"> Or contact me directly!</Typography>
                <Box className="personalIconsContainer">
                    <i className="personalIcon"><FontAwesomeIcon icon={faPhone}/> 052-2631001 </i> 
                    <i className="personalIcon"><FontAwesomeIcon icon={faEnvelope} /> qunzy13@gmail.com </i>
                    <a className="personalIcon linkedInLink" href="https://www.linkedin.com/in/milena-zingerman-866849216/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        LinkedIn
                    </a>
                    <a className="personalIcon linkedInLink" href="https://twitter.com/Tapachki" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                        Twitter (personal art account)
                    </a>
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default ContactMe