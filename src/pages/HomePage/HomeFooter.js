import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './HomeFooter.css';

const HomeFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('There is an issue. Please fill in all fields.');
      return;
    }

    const serviceID = 'service_107jbh8'; // Replace with your EmailJS service ID
    const templateID = 'template_zh9n36k'; // Replace with your EmailJS template ID
    const userID = 'ZmEYoUTpwiEQRZU4G'; // Replace with your EmailJS user ID

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'mariam.ejaz12@gmail.com',
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Your message has been sent!');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send your message. Please try again later.');
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div id="page13">
        <div className="form-container-main">
          <div className="form-container">
            <div className="form-image">
              <p className="montserrat">Get in touch</p>
              <p className="montserrat_">
                Contact ENGINEERSNEST to discover tailored solutions for your building, design, and renovation needs.
              </p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}

              />
              <input
                type="email"
                id="email" // Changed to match the state property name
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Say Hello"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="button-container">
                <button type="submit" className="send-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="page14">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="page14-link">
          <div className="page14-inner">
            <h1>Twitter</h1>
            <i className="ri-arrow-right-up-line"></i>
            <div className="center14"></div>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/engineersnest/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="page14-link">
          <div className="page14-inner">
            <h1>LinkedIn</h1>
            <i className="ri-arrow-right-up-line"></i>
            <div className="center14"></div>
          </div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="page14-link">
          <div className="page14-inner">
            <h1>Instagram</h1>
            <i className="ri-arrow-right-up-line"></i>
            <div className="center14"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default HomeFooter;
