import React from "react";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import Section from "../../components/section/section";
import SectionData from "../../assets/project_sections.json";
import "./project.scss";

function Project() {
  return (
    <main id="project">
      <div className="container">
        <article>
          <Section Sections={SectionData} />
          <div className="donation-progress">
            <h4>Dons collectés</h4>
            <div className="progress-bg">
              <div className="progress-bar">
                <h5 className="raised">5 000 €</h5>
              </div>
              <h5 className="goal">18 000 €</h5>
            </div>
            <Link
              to="https://www.helloasso.com/associations/les-amis-de-sainte-madeleine-de-la-jarrie/formulaires/3"
              target="_blank"
              className="btn--donate">
              Don pour le Chemin de Croix
              <FaHandshake className="icon" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Project;
