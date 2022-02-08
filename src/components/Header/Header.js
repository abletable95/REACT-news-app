import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select, Button, Radio } from "antd";
import "./Header.css";
//import i18n from "../../utils/i18next";

export function Header({ currentOrder }) {
  //console.log(i18n.language)
  const [select, setSelect] = useState("relevance");
  const { t, i18n } = useTranslation();
  const { Option } = Select;

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const setActive = ({ isActive }) => (isActive ? "activeLink" : "");

  const handleOnchange = (e) => {
    setSelect(e);
    currentOrder(e);
  };

  return (
    <header className="App-header">
      <div className="container">
        <div className="headerInner">
          <h1>News app</h1>
          <form>
            <label>{t("nav.order")}</label>
            <Select
              value={select}
              dropdownClassName="customSelect"
              style={{ width: 150 }}
              onChange={handleOnchange}
            >
              <Option value="relevance">{t("nav.relevance")}</Option>
              <Option value="newest">{t("nav.newest")}</Option>
              <Option value="oldest">{t("nav.oldest")}</Option>
            </Select>
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
            <Radio.Group defaultValue="ru"  buttonStyle="solid" size="small" onChange={changeLang}>
              <Radio.Button  value="ru">Ru</Radio.Button>
              <Radio.Button  value="en">En</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
