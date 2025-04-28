import './estiloAboutMe.css';

export default function AboutMe() {
  return (
    <div className="container">
      <img src="/images/eu.jpg" alt="Minha Foto" className="aboutme-image" />
      <div className="aboutme-text">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor apaixonado por criar soluções incríveis e inovadoras.
          Tenho experiência em diversas tecnologias, incluindo JavaScript, React, e Node.js.
          Adoro aprender coisas novas e estou sempre em busca de desafios que me permitam crescer
          tanto profissionalmente quanto pessoalmente.
        </p>
        <br />  
        <p>
          Além de programar, gosto de compartilhar conhecimento com a comunidade e colaborar em
          projetos open-source. Acredito que a tecnologia tem o poder de transformar vidas e estou
          comprometido em usá-la para criar um impacto positivo no mundo.
        </p>
      </div>
    </div>
  );
}