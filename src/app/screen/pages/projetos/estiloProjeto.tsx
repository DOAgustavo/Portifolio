import styled from "styled-components";

const StyledWrapper = styled.div`
  .projeto-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    padding: 2rem;
    margin-left: 250px; /* Espaço ao lado do Navbar */
    max-width: calc(100vw - 250px); /* Limita a largura ao restante da tela */
    height: 100vh; /* Ocupa toda a altura da viewport */
    overflow-y: auto; /* Adiciona rolagem vertical, se necessário */
    background-color: var(--background-color);
    color: var(--text-color);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center; /* Centraliza o texto */
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: center; /* Centraliza o texto */
  }
`;

export default StyledWrapper;