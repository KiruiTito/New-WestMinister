import React from "react";
import { Link } from "react-router-dom";
import "./page_not_found.scss";

function PageNotFound() {
  return (
    <main id="pnf">
      <div className="container">
        <div id="background" />
        <div className="top">
          <h1 className="top__title">404</h1>
          <h3 className="top__subhead">page not found</h3>
        </div>
        <div className="animation">
          <div className="animation__ghost">
            <div className="animation__ghost__hands">
              <div className="animation__ghost__hands--left" />
              <div className="animation__ghost__hands--right" />
            </div>
            <div className="animation__ghost__face">
              <div className="animation__ghost__eyes">
                <div className="animation__ghost__eyes--left" />
                <div className="animation__ghost__eyes--right" />
              </div>
              <div className="animation__ghost__mouth" />
              <div className="animation__ghost__feet">
                <div className="animation__ghost__feet--one" />
                <div className="animation__ghost__feet--two" />
                <div className="animation__ghost__feet--three" />
                <div className="animation__ghost__feet--four" />
              </div>
            </div>
          </div>
          <div className="animation__shadow" />
        </div>
        <div className="bottom">
          <p className="bottom__text">Oops, it seems that the requested page cannot be found!</p>
          <Link to="/" className="bottom__home">
            Retourner à la page d&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
