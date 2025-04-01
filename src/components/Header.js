import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import SacolaCompras from "../assets/images/ShoppingOutlined.png";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseCLient";

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

const Header = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user: supabaseUser },
        error,
      } = await supabase.auth.getUser();
  
      if (error) {
        console.error("Erro ao obter usuário:", error);
        return;
      }
  
      setUser(supabaseUser.email);
  
      if (supabaseUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      }
    }
  
    fetchUser();
  }, []); // ✅ agora o ESLint para de reclamar
  

  return (
    <section id="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="Logomarca" id="logo-img" />
        </div>
        <div className="header-menu">
          <a href="#hero" id="home">home</a>
          <a href="#delivery-field" id="delivery">delivery</a>
          <a href="#contact-field" id="contato">contato</a>
          <Link to="/Profile" id="perfil">perfil</Link>
          {isAdmin && <Link to="/admin" id="admin">Admin</Link>}
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
