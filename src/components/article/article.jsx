import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Section from "../section/section";
import ImageSlider from "../slider/slider";
import "./article.scss";

function Article({ Articles }) {
  const url = process.env.PUBLIC_URL;
  const [open, setOpen] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeArticle, setActiveArticle] = useState({});

  useEffect(() => {
    if (open === 1) {
      setOpen(0);
    }
  }, [open]);

  const handleClick = (slide, active) => {
    const index = active.images.findIndex((slides) => slides === slide);
    setActiveArticle(active);
    setSlideIndex(index);
    setOpen(1);
  };

  return (
    <div>
      {Articles.map((article) => (
        <article key={article.id} className="article" id={article.id}>
          <h2 className="article__title">{article.title}</h2>
          <div className="article__container">
            <div className="article__textarea" data-images={article.images.length > 0 ? "1" : "0"}>
              {article.text.length > 0 ? (
                <div className="article__textarea__text">
                  {article.text.map((articleText) => (
                    <div key={articleText.id} className="article__textarea__text__paragraph">
                      {parse(articleText.paragraph)}
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="article__textarea__sections">
                {article.section.length > 0 ? <Section Sections={article.section} /> : null}
              </div>
            </div>
            {article.images.length > 0 ? (
              <div className="article__images">
                {article.images.map((image) => (
                  <button
                    className="article__images__frame no-style-btn"
                    id={image.id}
                    key={image.id}
                    type="button"
                    onClick={() => {
                      handleClick(image, article);
                    }}>
                    <div className="article__images__frame__image">
                      <img src={url + image.url} title={image.title} alt={image.alt} />
                    </div>
                    <span>{image.title}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
      {Object.keys(activeArticle).length > 0 ? (
        <ImageSlider
          slidesImages={activeArticle.images}
          openSlider={open}
          startSlide={slideIndex}
        />
      ) : null}
    </div>
  );
}

export default Article;
