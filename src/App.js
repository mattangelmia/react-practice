import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./List";
import { Card } from "react-bootstrap";
import DateFilter from "./DateFilter";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import heroPic from "./images/DSC02679 2.png";
import Reviews from "./components/Reviews";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <InfoSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
