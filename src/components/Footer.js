import React from "react";
import FooterLogo from "../assets/images/logo.svg"

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="Logo rodapé" className="footer-logo-img" />
      </div>
      <div className="footer-text">
        <p id="footer-text">
          Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!!
        </p>
      </div>
    </section>
  );
};

export default Footer;
