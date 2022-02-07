import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
//import i18n from "../../utils/i18next";

export function Header({ currentOrder }) {
  //console.log(i18n.language)
  const [select, setSelect] = useState("relevance");
  const { t, i18n } = useTranslation();

  const changeLang= (e)=>{
i18n.changeLanguage(e.target.value)
  }

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
              {t("nav.order")}
              
            </label>
            <select value={select} onChange={handleOnchange}>
                <option value="relevance">{t("nav.relevance")}</option>
                <option value="newest">{t("nav.newest")}</option>
                <option value="oldest">{t("nav.oldest")}</option>
              </select>
          </form>
          <nav className="navigation">
            <NavLink to="/" className={setActive}>
            {t("nav.trending")}
            </NavLink>
            <NavLink to="/sport" className={setActive}>
            {t("nav.sport")}
            </NavLink>
            <NavLink to="/health" className={setActive}>
            {t("nav.health")}
            </NavLink>
          </nav>
          <div className="langs">
            <button value='ru' onClick={changeLang}>Ru</button>
            <button value='en' onClick={changeLang}>En</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
