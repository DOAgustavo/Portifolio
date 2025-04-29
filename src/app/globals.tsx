

import styled from "styled-components";
export const StyledBody = styled.body`
display: flex;
flex-direction: row; /* Alinha as seções horizontalmente */
width: 100vw; /* Largura da viewport */
height: 100vh; /* Altura da viewport */
overflow-x: scroll; /* Ativa o scroll horizontal */
scroll-snap-type: x mandatory; /* Ativa o snap para seções */
scroll-behavior: smooth; /* Faz o scroll ser suave */

.section {
  flex-shrink: 0; /* Impede que as seções encolham */
  width: 100vw; /* Cada seção ocupa 100% da largura da viewport */
  height: 100vh; /* Cada seção ocupa 100% da altura da viewport */
  scroll-snap-align: start; /* Alinha cada seção no início ao parar o scroll */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
}

/* Esconde a barra de rolagem (opcional) */
::-webkit-scrollbar {
  display: none;
}
`;