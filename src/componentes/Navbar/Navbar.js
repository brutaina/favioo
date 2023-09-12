import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="logo"src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.partagenorteshoppingnatal.com.br%2Flojas%2Fcineflix%2F&psig=AOvVaw1CSLvAyF1fi3AtL1avP43U&ust=1690510545169000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCU_tborYADFQAAAAAdAAAAABAD"></img>
      <span className="nav-logo">Cineflix</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Inicio</a>
        <a href="/about">Filmes de Sucessos</a>
        <a href="/service">Series Tops</a>
        <a href="/contact">Doramas e Animes</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};


export default Navbar;