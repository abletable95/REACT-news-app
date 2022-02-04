import "./App.css";
import { Routes, Route} from "react-router-dom";

import {News} from "./pages/News";
import { Header } from "./components/Header/Header";

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/news/:id" element={<News/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
