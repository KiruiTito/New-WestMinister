import React from "react";
import { useLocation } from "react-router-dom";
import Data from "../../assets/header.json";
import "./banner.scss";

function reduceUrl(url) {
  const dernierSlashIndex = url.lastIndexOf("/");
  if (dernierSlashIndex > 0) {
    return url.substring(0, dernierSlashIndex);
  }
  return url;
}

function Banner() {
  const location = useLocation();
  const path = location.pathname;
  const mainUrl = reduceUrl(path);
  let found = "";

  if (path === mainUrl || mainUrl === "/newsletter") {
    found = Data.find((banner) => banner.path === mainUrl);
  } else {
    const mainObject = Data.find((object) => object.path === mainUrl);
    if (!mainObject) {
      found = Data.find((banner) => banner.id === "Error-404");
    } else {
      found = mainObject.sublinks.find((banner) => mainUrl + banner.path === path);
    }
  }

  if (!found) {
    return null;
  }

  const url = process.env.PUBLIC_URL + found.url;
  const style = { backgroundImage: `url(${url})` };

  const handleClick = () => {
    const element = document.getElementById("welcome");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  switch (found.type) {
    case "large":
      return (
        <div className="container-banner">
          <div className="l-banner" style={style}>
            <div className="l-banner__textarea">
              <h1 className="l-banner__textarea__title">{found.title}</h1>
              <h2 className="l-banner__textarea__subhead">{found.subhead}</h2>
            </div>
            <button className="l-banner__down no-style-btn" type="button" onClick={handleClick}>
              <div className="l-banner__down__chevron">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      );

    case "small":
      return (
        <div className="banner" style={style}>
          <div className="banner__textarea">
            <h1 className="banner__textarea__title">{found.title}</h1>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default Banner;
