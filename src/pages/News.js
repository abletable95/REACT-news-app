import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NewsContainer } from "../components/News-container/News-container";

export function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const apiUrl = `https://content.guardianapis.com/search?q=${id}&page-size=10&show-fields=all&order-by=relevance&page=${currentpage}&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da`;

  //   Lazy loader
  useEffect(() => {
    if (isLoading) {
      axios
        .get(apiUrl)
        .then((resp) => {
          setNews([...news, ...resp.data.response.results]);
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => {
          setIsLoading(false);
          console.log("fetch");
        });
    }
  }, [isLoading]);

  //   initial load
  useEffect(() => {
    setCurrentPage(1);

    axios.get(apiUrl).then((resp) => {
      setNews([...resp.data.response.results]);
    });
  }, [id]);

  // handle scroll
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log(id);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
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