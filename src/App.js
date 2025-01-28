import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Delivery from "./components/Delivery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Delivery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
