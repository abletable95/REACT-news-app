import React from "react";
import "./News-item.css";
import { useTranslation } from "react-i18next";

export function NewsItem({ title, text, image, link }) {
  const { t } = useTranslation();
  return (
    <div className="newsItem">
      <h2>{title}</h2>
      <div className="imageWrap">
        <img src={image} alt="article image" />
      </div>
      <p>{text}...</p>
      <a href={link}>{t("news.readMore")}</a>
    </div>
  );
}

export default NewsItem;
