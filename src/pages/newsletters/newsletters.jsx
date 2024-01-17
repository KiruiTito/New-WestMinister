import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import NewsLetter from "../../assets/newsletter.json";
import "./newsletters.scss";

function Home() {
  const domain = "/newsletter/";
  const url = process.env.PUBLIC_URL;

  return (
    <main id="newsletters">
      <div className="container">
        <article className="article">
          <h3 className="article__title">Newsletters</h3>
          <div className="newsletters-container">
            <ul className="d-flex">
              {NewsLetter.map((newsletter) => (
                <li key={newsletter.id} className="d-flex justify-content-center">
                  <div className="progressBar d-flex justify-content-center">
                    <div className="progressBar__dot">
                      <div className="progressBar__dot__top" />
                      <div className="progressBar__dot__bottom" />
                    </div>
                  </div>
                  <Link to={domain + newsletter.id}>
                    <div className="newsletter d-flex justify-content-center">
                      <div
                        className="newsletter__image"
                        style={{ backgroundImage: `url(${url} ${newsletter.image.url})` }}
                      />
                      <div className="newsletter__text">
                        <h4>{newsletter.title}</h4>
                        <div>{parse(newsletter.text)}</div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Home;
