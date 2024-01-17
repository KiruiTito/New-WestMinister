import React from "react";
import Section from "../../components/section/section";
import SectionData from "../../assets/realisations.json";
import "./realisation.scss";

function Realisation() {
  return (
    <main id="realisations">
      <div className="container">
        <article>
          <Section Sections={SectionData} />
        </article>
      </div>
    </main>
  );
}

export default Realisation;
