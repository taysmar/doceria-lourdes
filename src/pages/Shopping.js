import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { LuArrowLeft } from "react-icons/lu";
import './Shopping.css';
import Footer from '../components/Footer';

export default function Shopping() {
  const [zipCode, setZipCode] = React.useState('');

  const handleZipChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      const formatted = value.replace(/(\d{5})(\d{3})/, '$1-$2');
      setZipCode(formatted);
    }
  };

  return (
    <div className="shopping-page">
      <Header />
      
      <div className="divider-container">
        <Link to='/' className="back-link">
          <LuArrowLeft className='arrow-back'/>
        </Link>
      </div>

      <div className='body-container'>
        <div className='itens-container'>
          {[1, 2, 3].map((item, index) => (
            <div key={index} className='item-container'>
              <img 
                src="/placeholder.svg?height=80&width=80" 
                alt='item-photo' 
                className="item-image"
              />
              <div className="item-details">
                <p className="item-name">nome: </p>
                <p className="item-quantity">quantidade: </p>
              </div>
            </div>
          ))}
        </div>

        <div className='order-summary'>
          <p className='resume-title'>Resumo do pedido</p>
          
          <div className='resume'>
            <div className='resume-row quantity'>
              <p>Quantidade</p>
              <p>3</p>
            </div>
            <div className='resume-row price'>
              <p>Preço</p>
              <p>R$ 70,00</p>
            </div>
            <div className='resume-row delivery-tax'>
              <p>Frete</p>
              <p>R$ 9,90</p>
            </div>
          </div>

          <div className='divider'></div>

          <div className='total'>
            <p>Total</p>
            <div className='payments-types'>
              <p className='total-amount'>R$ 79,90</p>
              <p className='payment-fraction'>Em até 2x no cartão</p>
            </div>
          </div>

          <div className='divider'></div>

          <div className='button-container'>
            <button className='add-more-bt'>
              Adicionar mais produtos
            </button>
            <button className='continue-bt'>
              Continuar
            </button>
          </div>
        </div>
      </div>

      <div className='frete-container'>
        <p className='frete-title'>Calcule o frete</p>
        <div className="frete-input-group">
          <input 
            value={zipCode}
            onChange={handleZipChange}
            placeholder='00000-000'
            maxLength={9}
          />
          <button className='frete-bt'>ok</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
