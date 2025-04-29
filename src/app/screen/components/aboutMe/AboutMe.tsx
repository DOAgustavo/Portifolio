import './estiloAboutMe.css';

export default function AboutMe() {
  return (
    <div className="container">
      <img src="/images/eu.jpg" alt="Minha Foto" className="aboutme-image" />
      <div className="aboutme-text">
        <h2>Sobre Mim</h2>
        <p>
          Olá, sou Giovanni Gustavo, desenvolvedor de software Full Stack, atualmente cursando Análise e Desenvolvimento de Sistemas pela Uniasselvi. Tenho sólida experiência em tecnologias como JavaScript, React, Node.js e Flutter, além de conhecimentos em bancos de dados como MySQL. Estou sempre em busca de novos desafios e aprendizado contínuo, acreditando no poder da tecnologia para transformar vidas e criar soluções inovadoras.
        </p>
      </div>
    </div>
  );
}