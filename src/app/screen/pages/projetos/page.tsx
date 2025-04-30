"use client";

import React from "react";
import StyledWrapper from "./estiloProjeto"; // Importe o estilo
import Navbar from "../../components/navBar/navBar";

export default function Projetos() {
  return (
    <StyledWrapper>
      <Navbar />
      <div className="projeto-container">
        <h1>Meus Projetos</h1>
        <p>Bem-vindo à página de projetos!</p>
      </div>
    </StyledWrapper>
  );
}