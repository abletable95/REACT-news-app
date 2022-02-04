import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  const setActive = ({ isActive }) => (isActive ? "activeLink" : "");

  return (
    <header className="App-header">
      <div className="container">
        <div className="headerInner">
          <h1>News app</h1>
          <nav className="navigation">
            <NavLink to="/news/trending" className={setActive}>
              Trending
            </NavLink>
            <NavLink to="/news/sport" className={setActive}>
              Sport
            </NavLink>
            <NavLink to="/news/health" className={setActive}>
              Health
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
