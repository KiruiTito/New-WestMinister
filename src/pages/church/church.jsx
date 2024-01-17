// Church.jsx
import React from "react";
import "./church.scss";

function Church() {
  return (
    <section className="church-info">
      <div className="container">
        <h2 className="section-title">THE GRACE ETHIOPIAN EVANGELICAL CHURCH</h2>
        <div className="address">
          <p>
            <strong>Address:</strong> 2201 8th Avenue, New Westminster, BC, V3M 2T9
          </p>
        </div>
        <div className="service-hours">
          <h2>Service Hours:</h2>
          <ul>
            <li>Wednesdays: Mid-Week Service 7 PM - 8:30 PM</li>
            <li>Fridays: Prayer Program 7 PM - 8:30 PM</li>
            <li>Saturdays: Youth Service and Bible Study 6 PM - 8:30 PM</li>
            <li>Sundays: Weekly Church Service 3 PM - 5:30 PM</li>
          </ul>
        </div>
        <div className="services-offered">
          <h2>Services Offered:</h2>
          <ul>
            <li>Youth Ministry</li>
            <li>Children’s Ministry</li>
            <li>Women’s Ministry</li>
            <li>Prayers</li>
            <li>Worship Ministry</li>
            <li>Couple and Family Counseling</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact:</h2>
          <p>
            Email: <a href="mailto:your@email.com">your@email.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Church;
