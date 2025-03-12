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
        <Link to='/'>
      <LuArrowLeft className='arrow-back'/>
        </Link>
      </div>

      <div className='body-container'>

      <div className='itens-container'>
      <div className='item-container'>
          <img alt='item-photo'></img>
          <p>nome: </p>
          <p>quantidade: </p>
        </div>

        <div className='item-container'>
          <img alt='item-photo'></img>
          <p>nome: </p>
          <p>quantidade: </p>
        </div>

        <div className='item-container'>
          <img alt='item-photo'></img>
          <p>nome: </p>
          <p>quantidade: </p>
        </div>
      </div>

        <div className='order-resume-container'>
          <p className='resume-title'>Resumo do pedido</p>
          <div className='resume'>
            <div className='quantity'>
          <p>Quantidade </p>
          <p>3</p>
            </div>
            <div className='price'>
          <p>Preço</p>
          <p>R$ 70,00</p>
            </div>
            <div className='delivery-tax'>
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
          <button className='add-more-bt'>Adicionar mais produtos</button>
          <button className='continue-bt'>Continuar</button>
          </div>
        </div>
      </div>
        <div className='frete-container'>
        <p className='frete-title'>Calcule o frete</p>
        <input placeholder='0000 - 000' maxLength={7}></input>
        <button className='frete-bt'>ok</button>
        </div>
      <Footer className='footer'/>
    </>
  );
}