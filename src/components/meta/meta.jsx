import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Data from "../../assets/header.json";

function reduceUrl(url) {
  const dernierSlashIndex = url.lastIndexOf("/");
  if (dernierSlashIndex > 0) {
    return url.substring(0, dernierSlashIndex);
  }
  return url;
}

function Meta() {
  const location = useLocation();
  let path = location.pathname;
  let mainUrl = reduceUrl(path);
  const end = " | Les Amis de Sainte Madeleine de La Jarrie";
  let found = "";

  if (path === mainUrl || mainUrl === "/newsletter") {
    found = Data.find((helmet) => helmet.path === mainUrl);
  } else {
    if (path === "/association/don/formulaire") {
      mainUrl = "/association";
      path = "/association/don";
    }
    const mainObject = Data.find((object) => object.path === mainUrl);
    if (!mainObject) {
      found = Data.find((helmet) => helmet.id === "Error-404");
    } else {
      found = mainObject.sublinks.find((helmet) => mainUrl + helmet.path === path);
    }
  }

  return (
    <Helmet>
      <title>{found ? found.name + end : "Default Title"}</title>
      <meta name="description" content={found ? found.description : "Default Description"} />
    </Helmet>
  );
}

export default Meta;
