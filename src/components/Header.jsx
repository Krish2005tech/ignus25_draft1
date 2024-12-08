import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const handleRegisterClick = () => {
    window.open(
      'https://example.com/register', // Replace with your registration link
      '_blank',
      'width=600,height=600'
    );
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" end>
          Logo
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/workshop">Workshop</NavLink>
        <NavLink to="/prakriti">Prakriti</NavLink>
        <NavLink to="/ca">CA</NavLink>
        <NavLink to="/past-sponsors">Past Sponsors</NavLink>
      </nav>
      <button className="register-btn" onClick={handleRegisterClick}>
        REGISTER
      </button>
    </header>
  );
};

export default Header;
