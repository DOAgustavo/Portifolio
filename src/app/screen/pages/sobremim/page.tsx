"use client";

import React from "react";
import StyledWrapper from "./estiloSobreMim"; // Importe o estilo, se necessário
import Navbar from "../../components/navBar/navBar";
export default function SobreMim() {
  return (
    <StyledWrapper>
      <Navbar />
      <div className="sobre-mim-background"></div>
      <div className="sobre-mim-container">
        <h1>Sobre Mim</h1>
        <p>
          Olá! Meu nome é Giovanni Gustavo, sou desenvolvedor de software Full Stack
          e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela Uniasselvi.
        </p>
        <p>
          Tenho experiência em tecnologias como JavaScript, React, Node.js e Flutter,
          além de conhecimentos em bancos de dados como MySQL. Sou apaixonado por criar
          soluções inovadoras e estou sempre em busca de novos desafios e aprendizado contínuo.
        </p>
      </div>
    </StyledWrapper>
  );
}