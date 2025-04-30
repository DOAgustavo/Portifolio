import styled from "styled-components";

const StyledWrapper = styled.div`
  .sobre-mim-container {
    padding: 2rem;
    text-align: center;
    background-color: var(--background-color);
    color: var(--text-color);
    margin-left: 250px; /* Espaço ao lado do Navbar (mesma largura do Navbar) */
    max-width: calc(100vw - 250px); /* Limita a largura ao restante da tela */
    height: 100vh; /* Ocupa toda a altura da viewport */
    overflow-y: auto; /* Adiciona rolagem vertical, se necessário */
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export default StyledWrapper;