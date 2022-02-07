import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";


import { News } from "./pages/News";
import { Header } from "./components/Header/Header";

function App() {
  const [postsOrder, setPostsOrder] = useState();
  const getOrder = (order) => {
    setPostsOrder(order);
  };

  return (
    <div className="App">
      <Header currentOrder={getOrder} />
      <Routes>
        <Route path="/" element={<News order={postsOrder} />} />
        <Route path="/:id" element={<News order={postsOrder} />} />
      </Routes>
    </div>
  );
}

export default App;
