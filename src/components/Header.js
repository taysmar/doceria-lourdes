import React from "react";
import Logo from "../assets/images/logo.svg"
import SacolaCompras from "../assets/images/ShoppingOutlined.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="header">
      <div className="header-container">
        <div className="header-logo">
        <img src={Logo} alt="Logomarca" id="logo-img"/>
        </div>
        <div className="header-menu">
          <a href="#hero" id="home">home</a>
          <a href="#delivery-field" id="delivery">delivery</a>
          <a href="#contact-field" id="contato">contato</a>
          <Link to="/Profile" id="perfil">perfil</Link>
        </div>
        <div className="shopping-bag">
          <Link to="/Shopping" id="img-shopping-bag">
            <img src={SacolaCompras} alt="Sacola de compras" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
