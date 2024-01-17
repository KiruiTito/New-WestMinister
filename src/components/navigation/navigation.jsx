import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import LINKS from "../../assets/header.json";
import "./navigation.scss";

function Navigation() {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="navigation">
      <button
        className="navigation__burger"
        type="button"
        onClick={() => setToggle(toggle ? 0 : 1)}
        data-toggle={toggle}>
        <ul className="navigation__burger__menu">
          <li className="navigation__burger__menu__line" />
          <li className="navigation__burger__menu__line" />
          <li className="navigation__burger__menu__line" />
        </ul>
      </button>
      <nav className="navigation__menu" data-toggle={toggle}>
        <ul className="navigation__menu__nav">
          {LINKS.map((link) => {
            if (link.enable === "enable") {
              return (
                <li key={link.id} className="navigation__menu__nav__link">
                  <Link
                    to={link.path}
                    className={link.sublinks.length > 0 ? "with-submenu" : "no-submenu"}
                    onClick={() => setToggle(0)}>
                    <span>
                      <div>{link.name}</div>
                    </span>
                  </Link>

                  {link.sublinks.length > 0 && (
                    <ul className="navigation__menu__nav__link__submenu">
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.id} className="navigation__menu__nav__link__submenu__link">
                          <Link to={link.path + sublink.path} onClick={() => setToggle(0)}>
                            <span>
                              <div>{sublink.name}</div>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return null; // Renvoyer null si link.enable n'est pas "enable"
          })}
        </ul>
        <Link to="/association/don" className="btn--donate btn--mobile">
          Like
          <FaHeart className="heart" />
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
