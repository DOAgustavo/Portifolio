"use client";

import React from "react";
import StyledWrapper from "./estiloNavBar";
import Loader from "./icon/icon"; // Importa o ícone

export default function Navbar() {
  return (
    <StyledWrapper>
      <div className="navbar">
        <div className="navbar-logo">
         
       
        </div>
        <ul className="navbar-links">
          <li>
            <div className="radio-wrapper">
              <input type="radio" id="home" name="menu" className="input" />
              <div className="btn">
                <span aria-hidden>_</span>Home
                <span aria-hidden className="btn__glitch">_Home_</span>
                <label className="number">1</label>
              </div>
            </div>
          </li>
          <li>
            <div className="radio-wrapper">
              <input type="radio" id="about" name="menu" className="input" />
              <div className="btn">
                <span aria-hidden>_</span>Sobre
                <span aria-hidden className="btn__glitch">_Sobre_</span>
                <label className="number">2</label>
              </div>
            </div>
          </li>
          <li>
            <div className="radio-wrapper">
              <input type="radio" id="projects" name="menu" className="input" />
              <div className="btn">
                <span aria-hidden>_</span>Projetos
                <span aria-hidden className="btn__glitch">_Projetos_</span>
                <label className="number">3</label>
              </div>
            </div>
          </li>
          <li>
            <div className="radio-wrapper">
              <input type="radio" id="contact" name="menu" className="input" />
              <div className="btn">
                <span aria-hidden>_</span>Contato
                <span aria-hidden className="btn__glitch">_Contato_</span>
                <label className="number">4</label>
              </div>
            </div>
          </li>
        </ul>
        <div className="navbar-icon">
          <Loader />
        </div>
        </div>
    </StyledWrapper>
  );
}