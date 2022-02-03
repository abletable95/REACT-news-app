import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Header} from './components/Header/Header';
import {NewsContainer} from './components/News-container/News-container';

function App() {
  let [news, setNews]= useState([])

  useEffect(()=>{
    const apiUrl = 'https://content.guardianapis.com/search?q=trending&page-size=10&show-fields=all&order-by=relevance&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da';
    axios.get(apiUrl).then((resp)=>{
      setNews([...resp.data.response.results])
    })
  },[setNews])
console.log(news)

  let newsArr = [
    {
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nostrum culpa rerum similique suscipit, iusto, in nobis quia aliquid omnis facilis, fugiat dolore deleniti quibusdam labore. Ipsa harum nostrum nesciunt.'
    }
  ]
  return (
    <div className="App">
      <Header/>
      <NewsContainer content={news} ></NewsContainer>
      
    </div>
  );
}

export default App;
