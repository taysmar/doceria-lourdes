import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Shopping from './pages/Shopping';
import UserProfile from './pages/Profile'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="Profile" element={<UserProfile />} />
        <Route path="Shopping" element={<Shopping />} />

      </Routes>
    </div>
  );
};

export default App;
