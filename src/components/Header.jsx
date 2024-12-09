import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import './Header.css';
import ignus_logo from '../assets/ignus_logo.png';


import Register from "./register/Register.jsx";

const Header = () => {
  const handleRegisterClick = () => {
    window.open(
      'http://localhost:5173/register', // Replace with your registration link
      '_blank',
      'width=600,height=600'
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" end>
          <img src={ignus_logo} alt="Ignus_Logo" className="logo-img" ></img>
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/workshop">Workshop</NavLink>
        <NavLink to="/prakriti">Prakriti</NavLink>
        <NavLink to="/ca">CA</NavLink>
        <NavLink to="/past-sponsors">Past Sponsors</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>

      {/* <button  className="register-btn" onClick={openModal}>REGISTER</button>
      <Register isModalOpen={isModalOpen} closeModal={closeModal} /> */}
      <button className="register-btn" onClick={handleRegisterClick}>REGISTER</button>
      

    </header>
  );
};

export default Header;
