import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./join.scss";

function Join() {
  const pdf = "/join.pdf";
  const image = "/facade_clocher.jpeg";
  const url = process.env.PUBLIC_URL;
  return (
    <main id="join">
      <div className="container">
        <div className="join">
          <div className="join__image d-flex justify-content-center">
            <div className="join__image__wrapper">
              <div className="join__image__wrapper__box blury-card">
                <img src={url + image} alt="" title="" />
                <div className="join__image__wrapper__box__frame">
                  <h2>Agissez pour le patrimoine</h2>
                  <span>Devenez membre actif de l&apos;association</span>
                </div>
              </div>
            </div>
          </div>
          <div className="join__text">
            <Link to={url + pdf} target="_blank" className="btn--donate">
              Fiche d&apos;inscription
              <FaDownload className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Join;
