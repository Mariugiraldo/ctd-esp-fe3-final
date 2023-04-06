import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/favs">Favs</Link>
            <a onClick={toggleTheme}>
              {theme == "dark" ? <MdOutlineDarkMode /> : <MdDarkMode />}
            </a>
          </menu>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
