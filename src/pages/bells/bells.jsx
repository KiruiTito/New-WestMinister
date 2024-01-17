import React from "react";
import Article from "../../components/article/article";
import "./bells.scss";
import ArticlesData from "../../assets/bells.json";

document.title = "The Bells";

function Bells() {
  return (
    <main id="bells">
      <div className="container">
        <p className="bells__paragraph">
          You reach the bell room of the imposing XIIth-century porch tower by taking a spiral
          staircase. This room houses the 4 bells of La Jarrie. This set is the largest peal in
          Aunis, justifying that after fourteen years of silence, the municipality has offered the
          people of La Jarrie the joy of hearing its bell heritage again.
        </p>
        <Article Articles={ArticlesData} />
      </div>
    </main>
  );
}

export default Bells;
