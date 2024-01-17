import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import ImageSlider from "../slider/slider";
import "./section.scss";

function Section({ Sections }) {
  const url = process.env.PUBLIC_URL;
  const [open, setOpen] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSection, setActiveSection] = useState({});

  useEffect(() => {
    if (open === 1) {
      setOpen(0);
    }
  }, [open]);

  const handleClick = (slide, active) => {
    const index = active.images.findIndex((slides) => slides === slide);
    setActiveSection(active);
    setSlideIndex(index);
    setOpen(1);
  };

  return (
    <div>
      {Sections.map((section) => {
        if (section.display === "enable") {
          return (
            <section className="section" id={section.id} key={section.id}>
              <div
                className="section__textarea"
                data-images={section.images.length > 0 ? "1" : "0"}>
                <h3 className="section__textarea__title">{section.title}</h3>
                {section.text?.map((ph) => (
                  <div key={ph.id} className="section__textarea__paragraph">
                    {parse(ph.paragraph)}
                  </div>
                ))}
              </div>
              {section.images.length > 0 ? (
                <div className="section__images">
                  {section.images.map((image) => (
                    <button
                      className="section__images__frame no-style-btn"
                      id={image.id}
                      key={image.id}
                      type="button"
                      onClick={() => {
                        handleClick(image, section);
                      }}>
                      <div className="section__images__frame__image">
                        <img src={url + image.url} title={image.title} alt={image.alt} />
                      </div>
                      <span>{image.title}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </section>
          );
        }
        return null;
      })}
      {Object.keys(activeSection).length > 0 ? (
        <ImageSlider
          slidesImages={activeSection.images}
          openSlider={open}
          startSlide={slideIndex}
        />
      ) : null}
    </div>
  );
}

export default Section;
