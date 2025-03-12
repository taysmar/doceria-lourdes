import React, { useState } from "react";
import "./Cadastro.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import {supabase} from '../supabaseCLient';


function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
  
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            address: formData.address,
            zipCode: formData.zipCode,
          },
        },
      });
  
      if (error) throw error;
  
      alert("Cadastro realizado! Verifique seu e-mail para confirmar a conta.");
      window.location.href = "/login";
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div className="container">
        <Header />
        <div className="divider-container">
        <Link to='/'>
      <LuArrowLeft className='arrow-back'/>
        </Link>
      </div>
        
      <main className="main-content">
        <div className="register-container">
          <h2 className="section-title">Cadastro</h2>

          <div className="register-grid">
            
            <div className="form-container">
              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nome Completo</label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Senha</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="form-label">Endereço</label>
                  <input
                    id="address"
                    name="address"
                    className="form-input"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode" className="form-label">CEP</label>
                  <div className="zip-code-container">
                    <input
                      id="zipCode"
                      name="zipCode"
                      className="form-input"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="00000-000"
                      required
                    />
                    <button
                      type="button"
                      className="search-button"
                    >
                      <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => window.location.href = "/"}
                    className="back-button"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="register-button"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>

            <div className="benefits-container">
              <h3 className="benefits-title">
                Benefícios da conta
              </h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <span className="bullet">•</span>
                  <span>Acompanhe seus pedidos facilmente</span>
                </li>
                <li className="benefit-item">
                  <span className="bullet">•</span>
                  <span>Receba ofertas exclusivas</span>
                </li>
                <li className="benefit-item">
                  <span className="bullet">•</span>
                  <span>Salve seus endereços para compras mais rápidas</span>
                </li>
                <li className="benefit-item">
                  <span className="bullet">•</span>
                  <span>Acesse seu histórico de compras</span>
                </li>
              </ul>

              <div className="login-section">
                <h4 className="login-title">
                  Já tem uma conta?
                </h4>
                <button
                  onClick={() => window.location.href = "/login"}
                  className="login-button"
                >
                  Fazer Login
                </button>
              </div>

              <div className="brand-section">
                <div className="logo-container">
                  <img
                    src="placeholder-logo.png"
                    alt="Doces da Lourdes Logo"
                    className="brand-logo"
                  />
                </div>
                <p className="brand-description">
                  Doces da Lourdes - Sabores que encantam desde 1995.
                  Experimente nossas delícias artesanais feitas com amor e
                  ingredientes selecionados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="placeholder-logo.png"
              alt="Doces da Lourdes Logo"
              className="footer-logo-img"
            />
          </div>
          <div className="footer-text">
            <p className="footer-paragraph">
              Desde 1995 trazendo o melhor da confeitaria artesanal para sua mesa. Nossos doces são feitos com ingredientes selecionados e muito carinho, seguindo receitas tradicionais que passam de geração em geração.
            </p>
            <p className="footer-contact">
              Rua dos Açúcares, 123 - Centro | Tel: (11) 5555-5555 | contato@docesdalourdes.com.br
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cadastro;
