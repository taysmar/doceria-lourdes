import React from "react";
import Divisor from "../assets/images/divisor.png"
import Bolo from "../assets/images/cake-img.svg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-title">
        <p id="hero-text">
          Provendo as melhores <span id="hero-text-sob">sobremesas</span> da grande Natal desde 1983.
        </p>
      </div>
      <div className="hero-description">
        <p id="hero-description">
          Nossa missão é buscar o melhor sabor para sua comemoração por um precinho camarada!
        </p>
      </div>
      <div className="hero-button">
        <Link to="./Shopping">
          <button id="hero-order">Peça agora  </button>
        </Link>
        
      </div>
      <div className="hero-profile-container">
        <div className="profile-pic">
          <img
            src="https://img.freepik.com/vetores-gratis/tiktok-profile-picture-template_742173-4482.jpg"
            alt="Perfil"
            id="profile-pic"
          />
        </div>
        <div className="profile-divisor">
          <img src={Divisor} id="divisor" alt="Divisor" />
        </div>
        <div className="profile-comment">
          <p id="comment">Melhor bolinho e salgados que já comi, atendimento atencioso.</p>
        </div>
      </div>
      <div className="hero-cake-img">
        <img src={Bolo} alt="Bolo" id="cake-img" />
      </div>
    </section>
  );
};

export default Hero;
