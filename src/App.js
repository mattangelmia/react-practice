import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./List";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import DateFilter from "./DateFilter";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

import Reviews from "./components/Reviews";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Nav />

      {/* <VideoModal display={modalDisplay} hideModal={hideModal} />
    
      <Hero showModal={showModal} />
      <InfoSection />
      <Reviews />
      <Footer /> */}

      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
