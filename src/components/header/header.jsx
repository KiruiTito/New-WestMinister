import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Navigation from "../navigation/navigation";
import Banner from "../banner/banner";
import "./header.scss";

function Header() {
  const url = `${process.env.PUBLIC_URL}/logo.png`;
  const style = { backgroundImage: `url(${url})` };
  return (
    <header>
      <div className="header">
        <Link to="/">
          <div className="header__logo" style={style} />
        </Link>
        <Navigation />
        <Link to="/association/don" className="btn--donate btn--desktop">
          FOUNDER
          <FaHeart className="icon" />
        </Link>
      </div>
      <Banner />
    </header>
  );
}

export default Header;
