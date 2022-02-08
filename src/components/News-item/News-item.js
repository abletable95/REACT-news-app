import React from "react";
import "./News-item.css";
import { useTranslation } from "react-i18next";
import { Card } from "antd";

export function NewsItem({ title, text, image, link }) {
  const { t } = useTranslation();
  const { Meta } = Card;

  return (
    <>
      <Card cover={<img src={image} alt="article image"/>}>
        <Meta title={title} description={`${text}...`} />
        <a href={link}>{t("news.readMore")}</a>
      </Card>
    </>
  );
}

export default NewsItem;
