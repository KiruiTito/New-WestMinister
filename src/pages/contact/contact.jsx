import React from "react";
import "./contact.scss";

function Contact() {
  const responseStyle = {};
  return (
    <>
      <div className="container-fluid row">
        <div className="col-md-7 col-12 first px-lg-5">
          <i className="fas fa-user icon" />
          <h2 className="h2">Contact Us</h2>
          <form className="">
            <label htmlFor="name" className="custom-label form-label mb-3">
              Name:
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </label>

            <label htmlFor="email" className="custom-label form-label mb-3">
              Email:
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="email@example.com"
                required
              />
            </label>

            <label htmlFor="message" className="custom-label form-label">
              Message:
              <textarea
                id="message"
                className="form-control"
                name="message"
                rows="4"
                placeholder="Enter Your Query Here"
              />
            </label>

            <button
              type="submit"
              className="bg-success border-0 p-2 w-50 rounded text-white fw-light">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-5 col-12 column">
          <div className="contact-info">
            <h2 className="fw-bold">Contact Information</h2>
            <i className="fas fa-map-marker-alt icon" />
            <p className="mb-2 first">
              <strong className="text-white">Address: </strong>
              <strong className="small fw-light text-white"> 7895 Canada Way, Burnaby, BC</strong>
            </p>
            <i className="fas fa-envelope icon" />
            <p className="mb-2">
              <strong className="text-white">contact: </strong>
              <a href="mailto:info@example.com" style={{ color: "rgb(147 197 253)" }}>
                <strong className="small fw-light">+1 604 553-3536</strong>
              </a>
            </p>
            <i className="fas fa-globe icon" />
            <p className="mb-4">
              <strong className="text-white">Website: </strong>
              <a
                href="http://www.example.ca"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgb(147 197 253)" }}>
                https://geecvancouver.ca/
              </a>
            </p>
            <p className="small text-white last">
              Feel free to contact us for any inquiries or assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center container-fluid px-lg-5 mt-4">
        {/* ... existing code ... */}
        <div className="container-fluid px-lg-5 text-center py-5" style={responseStyle}>
          {/* Include your map iframe here */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6934683766474!2d-122.88294907543538!3d49.18413277931113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677db0df02a59%3A0x1c02c7673ec038c1!2sGrace%20Ethiopian%20Evangelical%20Church%20Burnaby%20BC%2C%2012246%20100%20Ave%2C%20Surrey%2C%20BC%20V3V%202X1%2C%20Canada!5e0!3m2!1sen!2sus!4v1638940464052!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
