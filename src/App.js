import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Shopping from './pages/Shopping';
import UserProfile from './pages/Profile';
import LoginPage from "./pages/Login";
import './App.css'
import AdminPage from "./pages/ProdutosAdmi";
import SmallShop from "./pages/SmallShop";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="Profile" element={<UserProfile />} />
        <Route path="Shopping" element={<Shopping />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Admin" element={<AdminPage />} />
        <Route path="Lojinha" element={<SmallShop />} />

      </Routes>
    </div>
  );
};

export default App;
