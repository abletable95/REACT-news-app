import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import {Trending} from "./pages/Trending";
import {Sport} from "./pages/Sport";
import { Header } from "./components/Header/Header";
import { NewsContainer } from "./components/News-container/News-container";

function App() {
  let [news, setNews] = useState([]);
  let [isLoading, setIsLoading] = useState(true)
  let [currentpage, setCurrentPage] = useState(1);

  useEffect(() => {
    const apiUrl = `https://content.guardianapis.com/search?q=sport&page-size=10&show-fields=all&order-by=relevance&page=${currentpage}&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da`;

    if (isLoading) {
      
      axios.get(apiUrl).then((resp) => {
        setNews([...news, ...resp.data.response.results]);
        setCurrentPage(prev => prev + 1);
        
      }).finally(()=>{
        setIsLoading(false);
        console.log(isLoading);
        
      });
    }
  }, [isLoading]);
  //console.log(news);
 
// handle scroll

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      (e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100 )
    ) {
      setIsLoading(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <Link to="/trending">Link</Link>
      <Link to="/sport">sport</Link>
      <Routes>
        <Route path="/trending" element={<Trending content={news}/>}/>
        <Route path="/sport" element={<Sport content={news}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
