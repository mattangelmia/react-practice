import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { useState } from "react";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

import Nav from "../components/Nav";
import Hero from "../components/Hero";

import Reviews from "../components/Reviews";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import Products from "../components/Products";

export default function Home() {
  const [modalDisplay, setModalDisplay] = useState("none");
  function showModal() {
    setModalDisplay("flex");
  }

  function hideModal() {
    setModalDisplay("none");
  }

  return (
    <div>
      <VideoModal display={modalDisplay} hideModal={hideModal} />
      <Hero showModal={showModal} />
      <InfoSection />
      <Reviews />
      <Footer />
    </div>
  );
}
