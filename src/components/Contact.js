import React from "react";
import Whatsapp from "../assets/images/WhatsAppOutlined.png"
import Instagram from "../assets/images/InstagramOutlined.png"
const Contact = () => {
  return (
    <section id="contact-field">
      <div className="title">
        <p id="title-contato">Entre em contato</p>
      </div>
      <div className="contact-container">
        <div className="contact-text">
          Vem conversar com a gente! Estamos no Whatsapp e Instagram ansiosos para ser o maior destaque da sua próxima festa!
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/doceriadalourdes/">
            <img src={Whatsapp} alt="WhatsApp" className="social-media-icons" />
          </a>
          <a href="https://www.instagram.com/doceriadalourdes/">
            <img src={Instagram} alt="Instagram" className="social-media-icons" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
