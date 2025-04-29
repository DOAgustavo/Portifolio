import styled from "styled-components";

const StyledContactMe = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  text-align: center; /* Centraliza o texto */
  padding: 2rem;
  background-color: var(--background-color); /* Cor de fundo */
  color: var(--text-color); /* Cor do texto */

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .btn2 {
    position: relative;
    display: inline-block;
    padding: 10px 20px; /* Reduz o padding */
    border: 1.5px solid #f5434f; /* Define a borda com a cor personalizada */
    text-transform: uppercase;
    color:rgb(255, 255, 255); /* Define a cor do texto */
    text-decoration: none;
    font-weight: 500; /* Reduz o peso da fonte */
    font-size: 16px; /* Reduz o tamanho da fonte */
    transition: 0.3s;
  }

  .btn2::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - -2px);
    background-color: #121212; /* Fundo escuro */
    transition: 0.3s ease-out;
    transform: scaleY(1);
  }

  .btn2::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 40px); /* Ajusta a altura */
    background-color: #121212; /* Fundo escuro */
    transition: 0.3s ease-out;
    transform: scaleY(1);
  }

  .btn2:hover::before {
    transform: translateY(-20px); /* Ajusta o efeito de hover */
    height: 0;
  }

  .btn2:hover::after {
    transform: scaleX(0);
    transition-delay: 0.15s;
  }

  .btn2:hover {
    border: 1.5px solid #f5434f; /* Mantém a borda consistente no hover */
    color: #fff; /* Altera a cor do texto no hover */
    background-color: #f5434f; /* Adiciona fundo com a cor personalizada no hover */
  }

  .btn2 span {
    position: relative;
    z-index: 3;
  }
`;

export default StyledContactMe;