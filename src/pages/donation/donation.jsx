import React from "react";
import { FaHandHoldingHeart, FaHandshake, FaPrint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./donation.scss";

function Donation() {
  const navigate = useNavigate();

  return (
    <main id="donation">
      <div className="container">
        <article>
          <h2>Become a Benefactor Member of the Association</h2>
          <p>
            By supporting our association, you contribute to acting for the preservation and
            enhancement of the church of La Jarrie.
            <br />
            Donations are eligible for a tax reduction for individuals domiciled in France, up to
            66%, within the limit of 20% of your taxable income.
          </p>
          <h3>Payment is possible by:</h3>
          <span>1- Credit card online on the HelloAsso platform:</span>
          <div className="buttons-container d-flex">
            <a
              to="https://www.helloasso.com/associations/les-amis-de-sainte-madeleine-de-la-jarrie/formulaires/2"
              target="_blank"
              className="btn--donate">
              Donation for the association
              <FaHandHoldingHeart className="icon" />
            </a>
            <a
              to="https://www.helloasso.com/associations/les-amis-de-sainte-madeleine-de-la-jarrie/formulaires/3"
              target="_blank"
              className="btn--donate">
              Donation for the Way of the Cross
              <FaHandshake className="icon" />
            </a>
          </div>
          <div className="buttons-container d-flex">
            <button
              className="btn--donate no-style-btn"
              type="button"
              onClick={() => navigate("/association/don/formulaire")}>
              Donation Form 2023
              <FaPrint className="icon" />
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Donation;
