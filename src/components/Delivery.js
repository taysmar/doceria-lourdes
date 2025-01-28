import React from "react";
import ScooterIcon from "../assets/images/icons/Scooter.png";
import HandHoldingHeartIcon from "../assets/images/icons/Hand Holding Heart.png";
import ChristmasGiftIcon from "../assets/images/icons/Christmas Gift.png"

const Delivery = () => {
  return (
    <section id="delivery-field">
      <div className="delivery-title">
        <p id="title-delivery">Nosso delivery</p>
      </div>
      <div className="delivery-container">
        {["about-delivery", "about-care", "about-giving"].map((id, index) => (
          <div id={id} key={index} className="delivery-item">
            <img
              src={id === "about-delivery" ? ScooterIcon : id === "about-care" ? HandHoldingHeartIcon : ChristmasGiftIcon}
              alt=""
              className="delivery-icon"
            />
            <p className="delivery-text">
              Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
