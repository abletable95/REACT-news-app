import React from "react";
import "./News-item.css";

export function NewsItem({ title, text, image, link }) {
  return (
    <div className="newsItem">
      <h2>{title}</h2>
      <div className="imageWrap">
        <img src={image} alt="article image" />
      </div>
      <p>{text}...</p>
      <a href={link}>Read more</a>
    </div>
  );
}

export default NewsItem;
