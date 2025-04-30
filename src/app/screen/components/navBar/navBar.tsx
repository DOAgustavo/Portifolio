"use client";

import React from "react";
import StyledWrapper from "./estiloNavBar";
import Loader from "./icon/icon";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Obtém a rota atual

  const navigateTo = (path: string) => {
    router.push(path); // Redireciona para a URL especificada
  };

  return (
    <StyledWrapper>
      <div className="navbar">
        <div className="navbar-logo"></div>
        <ul className="navbar-links">
          <li>
            <div className="radio-wrapper">
              <input
                type="radio"
                id="home"
                name="menu"
                className="input"
                checked={pathname === "/"} // Verifica se está na rota Home
                readOnly
              />
              <div className="btn" onClick={() => navigateTo("/")}>
                <span aria-hidden>_</span>Home
                <span aria-hidden className="btn__glitch">_Home_</span>
                <label className="number">1</label>
              </div>
            </div>
          </li>
          <li>
            <div
              className="radio-wrapper"
              onClick={() => navigateTo("/screen/pages/sobremim")}
            >
              <input
                type="radio"
                id="about"
                name="menu"
                className="input"
                checked={pathname === "/screen/pages/sobremim"} // Verifica se está na rota Sobre Mim
                readOnly
              />
              <div className="btn">
                <span aria-hidden>_</span>Sobre
                <span aria-hidden className="btn__glitch">_Sobre_</span>
                <label className="number">2</label>
              </div>
            </div>
          </li>
          <li>
            <div className="radio-wrapper">
              <input
                type="radio"
                id="projects"
                name="menu"
                className="input"
                checked={pathname === "/projects"} // Verifica se está na rota Projetos
                readOnly
              />
              <div className="btn" onClick={() => navigateTo("/screen/pages/projetos")}>
                <span aria-hidden>_</span>Projetos
                <span aria-hidden className="btn__glitch">_Projetos_</span>
                <label className="number">3</label>
              </div>
            </div>
          </li>
          <li>
            <div className="radio-wrapper" onClick={() => navigateTo("/contact")}>
              <input
                type="radio"
                id="contact"
                name="menu"
                className="input"
                checked={pathname === "/contact"} // Verifica se está na rota Contato
                readOnly
              />
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