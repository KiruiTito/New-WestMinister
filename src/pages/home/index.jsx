import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ImageSlider from "../../components/slider/slider";
import NewsLetter from "../../assets/newsletter.json";
import News from "../../assets/news.json";
import "./index.scss";

function Home() {
  const domain = "/newsletter/";
  const url = process.env.PUBLIC_URL;
  const lastNewsletter = NewsLetter[NewsLetter.length - 1];
  const [open, setOpen] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const groupedItems = [[]]; // Replace this with your logic for grouped items

  useEffect(() => {
    if (open === 1) {
      setOpen(0);
    }
  }, [open]);

  const handleClick = () => {
    // Replace this with your logic to handle click
    setSlideIndex(0);
    setOpen(1);
  };

  return (
    <main id="home">
      <div className="container">
        <article>
          <h3 id="welcome" className="full-screen">
            WELCOME TO GRACE EVANGELICAL CHURCH
          </h3>
        </article>
        <div className="carousel">
          <div className="gallery full-screen d-flex justify-content-center">
            {groupedItems.map((column) => (
              <div className="gallery__column" key={column}>
                {column.map((slide) => (
                  <button
                    className="gallery__column__card no-style-btn"
                    id={slide.id}
                    key={slide.id}
                    type="button"
                    onClick={() => {
                      handleClick(slide);
                    }}>
                    <figure className="gallery__column__card__thumb">
                      <img
                        src={url + slide.url}
                        alt={slide.alt}
                        className="gallery__column__card__thumb__image"
                      />
                      <figcaption className="gallery__column__card__thumb__caption">
                        {slide.title}
                      </figcaption>
                    </figure>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <ImageSlider slidesImages={groupedItems} openSlider={open} startSlide={slideIndex} />
        </div>
        <div className="news-container">
          <h3 className="title">OUR MESSAGE</h3>
          <ul className="news-list d-flex">
            {News.map((news) => {
              if (news.enable === "enable") {
                return (
                  <li key={news.id} className="d-flex justify-content-center">
                    <div className="progressBar d-flex justify-content-center">
                      <div className="progressBar__dot">
                        <div className="progressBar__dot__top" />
                        <div className="progressBar__dot__bottom" />
                      </div>
                    </div>
                    <div className="news d-flex justify-content-center">
                      <div
                        className="news__image"
                        style={{ backgroundImage: `url(${url} ${news.image.url})` }}
                      />
                      <div className="news__text">
                        <h4>{news.title}</h4>
                        <div>{parse(news.text)}</div>
                      </div>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div className="newsletter-container d-flex justify-content-center">
          <h3 className="title">Newsletter</h3>
          <Link to={domain + lastNewsletter.id}>
            <div id={lastNewsletter.id} className="newsletter d-flex justify-content-center">
              <div
                className="newsletter__image"
                style={{ backgroundImage: `url(${url} ${lastNewsletter.image.url})` }}
              />
              <div className="newsletter__text">
                <h4>{lastNewsletter.title}</h4>
                <div>{parse(lastNewsletter.text)}</div>
              </div>
            </div>
          </Link>
          {/* Removed the "More Newsletters" button */}
        </div>
      </div>
    </main>
  );
}

export default Home;
