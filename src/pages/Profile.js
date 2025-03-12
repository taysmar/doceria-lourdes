import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./Profile.css";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Header from "../components/Header";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Maria Clara",
    email: "maria.clara@email.com",
    phone: "(11) 99999-9999"
  });

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const saveChanges = () => {
    setUser(updatedUser);
    setEditing(false);
  };

  return (
    <div className="container">
        <Header />
<div className="divider-container">
        <Link to='/'>
      <LuArrowLeft className='arrow-back'/>
        </Link>
      </div>
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Meu Perfil</h2>
        <div className="profile-content">
          <div className="profile-image"></div>
          <h3 className="profile-name">{user.name}</h3>
          <p className="profile-info">{user.email}</p>
          <p className="profile-info">{user.phone}</p>
        </div>
        
        {editing ? (
            <div className="edit-section">
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className="input-field"
              />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="input-field"
              />
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className="input-field"
              />
            <button onClick={saveChanges} className="save-button">Salvar</button>
          </div>
        ) : (
            <button onClick={() => setEditing(true)} className="edit-button">
            <FaEdit className="edit-icon" /> Editar Perfil
          </button>
        )}
      </div>
    </div>
    <div className="create-profile">
      <p>Ainda não tem uma conta? </p>
      <Link to='../Cadastro'>
      <button>Criar conta</button>
      </Link>
    </div>
        </div>
  );
}