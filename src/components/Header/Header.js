import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header({ currentOrder }) {
  const [select, setSelect] = useState("relevance");

  const setActive = ({ isActive }) => (isActive ? "activeLink" : "");

  const handleOnchange = (e) => {
    setSelect(e.target.value);
    currentOrder(e.target.value);
  };

  return (
    <header className="App-header">
      <div className="container">
        <div className="headerInner">
          <h1>News app</h1>
          <form>
            <label>
              Order by:
              <select value={select} onChange={handleOnchange}>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
              </select>
            </label>
          </form>
          <nav className="navigation">
            <NavLink to="/" className={setActive}>
              Trending
            </NavLink>
            <NavLink to="/sport" className={setActive}>
              Sport
            </NavLink>
            <NavLink to="/health" className={setActive}>
              Health
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
