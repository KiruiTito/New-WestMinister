import React from 'react';

function Contact() {
  return (
    <div className="container">
      <div className="column">
        <i className="fas fa-user icon"></i>
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name" className="custom-label">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter Your Name" required />

          <label htmlFor="email" className="custom-label">Email:</label>
          <input type="email" id="email" name="email" placeholder="email@example.com" required />

          <label htmlFor="message" className="custom-label">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter Your Query Here"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="column">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <i className="fas fa-map-marker-alt icon"></i>
          <p><strong>Address:</strong> 123 Main St, City, Country</p>
          <i className="fas fa-envelope icon"></i>
          <p><strong>Email:</strong> <a href="mailto:info@example.com" style={{ color: '#fff' }}>info@example.com</a></p>
          <i className="fas fa-globe icon"></i>
          <p><strong>Website:</strong> <a href="http://www.example.com" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>www.example.com</a></p>
          <p>Feel free to contact us for any inquiries or assistance.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
