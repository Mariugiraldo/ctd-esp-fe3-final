import "./index.css";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favorites from "./Routes/Favorites";
import DentistDetail from "./Routes/DentistDetail";
import React from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favorites />} />
          <Route path="/dentist/:id" element={<DentistDetail  />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
