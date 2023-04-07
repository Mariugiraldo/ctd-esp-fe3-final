import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {MdBrightnessHigh, MdBrightnessLow } from "react-icons/all";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
    setTheme(theme);
  }, [theme]);

  return (
    <Fragment>
      <div className="navbar-container">
        <nav className="">
          <h1>
            <img src="DH.ico"></img> Odonto
          </h1>
          <menu className="nav-menu">
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/contact">Contact</Link></h3>
            <h3><Link to="/favs">Favs</Link></h3>
            <a onClick={toggleTheme}>
              {theme == "dark" ? <MdBrightnessLow size={60}/> : <MdBrightnessHigh size={60}/>}
            </a>
          </menu>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
