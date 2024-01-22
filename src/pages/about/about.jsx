import React from "react";
import Article from "../../components/article/article";
import "./about.scss";
import ArticlesData from "../../assets/about.json";

export default function About() {
  return (
    <main id="about">
      <div className="container">
        <Article Articles={ArticlesData} />
      </div>
    </main>
  );
}
