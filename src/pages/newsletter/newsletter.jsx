import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import NewsLetter from "../../assets/newsletter.json";
import "./newsletter.scss";

function findNewsletter(id) {
  return NewsLetter.find((news) => news.id === id);
}

function Newsletter() {
  const navigate = useNavigate();
  const { id } = useParams();
  const newsletter = useMemo(() => findNewsletter(id), [id]);
  const url = process.env.PUBLIC_URL;

  useEffect(() => {
    if (!newsletter) {
      navigate("/404");
    }
  }, [newsletter]);

  if (!newsletter) {
    return null;
  }

  return (
    <main id="news">
      <div className="container">
        <article id={newsletter.id} className="article d-flex justify-content-center">
          <div className="article__header d-flex">
            <figure className="article__header__image">
              <img
                src={url + newsletter.image.url}
                title={newsletter.image.title}
                alt={newsletter.image.alt}
              />
              <figcaption className="article__header__image__caption">
                {newsletter.image.title}
              </figcaption>
            </figure>
            <div className="article__header__text d-flex">
              <h2 className="article__header__text__title">{newsletter.title}</h2>
              <div className="article__header__text__paragraph">{parse(newsletter.text)}</div>
            </div>
          </div>
          {newsletter.section.map((section) => (
            <section key={section.id} className="article__section">
              {section.title ? <h3 className="article__section__title">{section.title}</h3> : null}
              <div className="article__section__text">{parse(section.text)}</div>
            </section>
          ))}
          <div className="article__footer">{parse(newsletter.conclusion)}</div>
        </article>
        <button className="btn--back no-style-btn" type="button" onClick={() => navigate(-1)}>
          Return
        </button>
      </div>
    </main>
  );
}

export default Newsletter;
