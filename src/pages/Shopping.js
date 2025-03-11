import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { LuArrowLeft } from "react-icons/lu";
import './Shopping.css'
import Footer from '../components/Footer';


export default function Shopping() {
  return (
    <>
      <Header />
      <div className="divider-container">
      <LuArrowLeft className='arrow-back'/>
      </div>

      <div className='body-container'>
        <div className='itens-container'>
          <img></img>
          <p></p>
          <p></p>
        </div>

        <div className='itens-container'>
          <img></img>
          <p>nome: </p>
          <p>quantidade: </p>
        </div>

        <div className='itens-container'>
          <img></img>
          <p></p>
          <p></p>
        </div>

        <div className='order-resume-container'>
          <p className='resume-title'>Resumo do pedido</p>
          <div className='resume'>
          <p>Quantidade </p>
          <p>3</p>
          <p>Preço</p>
          <p>R$ 70,00</p>
          <p>Frete</p>
          <p>R$ 9,90</p>
          </div>
          <div className='divider-t'></div>
          <div className='total'>
            <p>Total</p>
            <p>R$ 79,90</p>
            <p>Em até 2x no cartão</p>
          </div>
          <div className='divider-b'></div>
          <div className='button-container'>
          <button>Adicionar mais produtos</button>
          <button>Continuar</button>
          </div>
        </div>
        <div className='frete-container'></div>
        <p className='frete-title'>Calcule o frete</p>
        <input></input>
        <button>ok</button>
      </div>
      <Footer className='footer'/>
    </>
  );
}