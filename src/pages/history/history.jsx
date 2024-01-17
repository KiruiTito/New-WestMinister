import React, { useState, useEffect } from "react";
import ImageSlider from "../../components/slider/slider";
import SLIDES from "../../assets/slides.json";
import "./history.scss";

function History() {
  const url = process.env.PUBLIC_URL;
  const [open, setOpen] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeToggle, setActiveToggle] = useState({});

  const handleInputChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (open === 1) {
      setOpen(0);
    }
  }, [open]);

  function handleKeyDown(e) {
    if (e.key === "space") {
      setOpen(1);
    }
  }

  const handleClick = (slide) => {
    const index = SLIDES.history.findIndex((slides) => slides === slide);
    setSlideIndex(index);
    setOpen(1);
  };

  const handleShow = (e) => {
    const btnName = e.target.name;
    if (activeToggle[btnName] === 1) {
      setActiveToggle({ ...activeToggle, [e.target.name]: 0 });
      e.target.closest(".article").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    } else {
      setActiveToggle({ ...activeToggle, [e.target.name]: 1 });
    }
  };

  return (
    <main id="history">
      <div className="container">
        <div className="parent d-flex">
          <div className="input-container d-flex">
            <button
              className={activeIndex === 0 ? "input no-style-btn active" : "input no-style-btn"}
              type="button"
              onClick={() => handleInputChange(0)}>
              <span data-year="1869" />
            </button>
            <button
              className={activeIndex === 1 ? "input no-style-btn active" : "input no-style-btn"}
              type="button"
              onClick={() => handleInputChange(1)}>
              <span data-year="1920" />
            </button>
            <button
              className={activeIndex === 2 ? "input no-style-btn active" : "input no-style-btn"}
              type="button"
              onClick={() => handleInputChange(2)}>
              <span data-year="2023" />
            </button>
          </div>
          <div className="description-container d-flex">
            <article className={activeIndex === 0 ? "article active" : "article"}>
              <section className="section">
                <div className="section__textarea">
                  <div className="section__textarea__title d-flex justify-content-center">
                    <h2>30 octobre 1869</h2>
                    <h3>Extrait du bulletin religieux du diocèse de la Rochelle Saintes</h3>
                    <h4>6° année</h4>
                  </div>
                  <p
                    className={
                      activeToggle.btn_1 === 1
                        ? "section__textarea__paragraph show"
                        : "section__textarea__paragraph"
                    }>
                    … »(En) moins de trois ans, grâce à l’activité de M. le doyen de La Jarrie, et
                    du concours de ses paroissiens, on a vu s’accomplir une restauration inespérée ;
                    l’intérieur de l’église, jadis si délabré, a pris les proportions et l’élégance
                    d’une nef gothique avec ses deux bas-côtés ; un sanctuaire de même ordre,
                    accompagné de deux chapelles latérales ; a terminé chacune de ces nefs et un
                    délicat autel, marbre et or ; est venu donner à cet ensemble un dernier trait de
                    grâce et de bon goût.
                    <br />
                    L’ornementation intérieure de l’édifice laissai encore à désirer, cependant,
                    bien que le genre gothique soit déjà, et par lui-même, une ornementation.
                    <br />
                    Le chemin de croix qui a été placé dimanche dernier, ne sera pas la moindre
                    pièce de l’ornementation projetée. Les quatorze tableaux qui me composent,
                    entourés chacun d’un encadrement (néo NDLR) gothique en chêne, découpé à jour,
                    forment autour de l’église une galerie parfaitement harmonisée avec le genre et
                    les proportions de l’édifice. Serons-nous indiscrets en disant que ces gracieux
                    encadrements sont dus au travail habile et patient de M. le curé lui-même.
                    <br />
                    La pose du chemin de croix été faite par M. L’abbé Birot, curé de Saint Nicolas,
                    pendant que du haut de la chaire, M. l’abbé Rolland, ancien missionnaire du
                    diocèse, appelait, avec un accent apostolique, l’attention des fidèles sur les
                    grands souvenirs que redit à la foi du chrétien les stations de ce douloureux
                    pèlerinage.
                    <br />
                    L’ensemble de la cérémonie était d’un effet émouvant, et, nous en sommes
                    persuadés, cette émotion laissera des traces dans l’âme des fidèles nombreux,
                    présents à la cérémonie ».
                  </p>
                  <button
                    className={
                      activeToggle.btn_1 === 1
                        ? "toggle-btn no-style-btn d-flex active"
                        : "toggle-btn no-style-btn d-flex"
                    }
                    type="button"
                    name="btn_1"
                    onClick={handleShow}>
                    {activeToggle.btn_1 === 1 ? "Réduire" : "En savoir +"}
                  </button>
                </div>
              </section>
            </article>
          </div>
        </div>
        <div className="gallery d-flex">
          {SLIDES.history.map((slide) => (
            <button
              key={slide.id}
              className="gallery__frame d-flex justify-content-center no-style-btn"
              onClick={() => handleClick(slide)}
              onKeyDown={handleKeyDown}
              type="button"
              tabIndex={0}>
              <img
                className="gallery__frame__picture"
                src={url + slide.url}
                alt={slide.alt}
                title={slide.title}
              />
            </button>
          ))}
        </div>
        <ImageSlider slidesImages={SLIDES.history} openSlider={open} startSlide={slideIndex} />
      </div>
    </main>
  );
}

export default History;
