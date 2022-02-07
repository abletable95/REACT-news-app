import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NewsContainer } from "../components/News-container/News-container";

export function News({ order }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const { id } = useParams();

  const apiUrl = `https://content.guardianapis.com/search?`;

  //   initial load

  useEffect(() => {
    setCurrentPage(1);
    axios
      .get(
        `${apiUrl}q=${id || "trending"}&page-size=10&show-fields=all&order-by=${
          order || "relevance"
        }&page=1&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da`
      )
      .then((resp) => {
        setNews([...resp.data.response.results]);
      });
  }, [id, order]);

  //   Unfinite block

  useEffect(() => {
    if (isLoading) {
      axios
        .get(
          `${apiUrl}q=${
            id || "trending"
          }&page-size=10&show-fields=all&order-by=${
            order || "relevance"
          }&page=${currentpage}&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da`
        )
        .then((resp) => {
          setNews([...news, ...resp.data.response.results]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [currentpage]);

  // handle scroll
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    if (isLoading) setCurrentPage((prev) => prev + 1);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  return (
    <>
      <NewsContainer content={news}></NewsContainer>
    </>
  );
}

export default News;
