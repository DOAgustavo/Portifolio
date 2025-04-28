import './estiloNav.css';

export default function Navbar() {
  return (
    <nav className="navbar">
  
      <ul className="navbar-links">
        <li>
          <div className="radio-wrapper">
            <input type="radio" id="aboutme" name="btn" className="input" />
            <div className="btn">
              <span aria-hidden="true">_</span>Sobre Mim
              <span aria-hidden="true" className="btn__glitch">_Sobre_Mim</span>
              <label className="number">r1</label>
            </div>
          </div>
        </li>
        <li>
          <div className="radio-wrapper">
            <input type="radio" id="skills" name="btn" className="input" />
            <div className="btn">
              <span aria-hidden="true">_</span>Habilidades
              <span aria-hidden="true" className="btn__glitch">_Habilidades</span>
              <label className="number">r2</label>
            </div>
          </div>
        </li>
        <li>
          <div className="radio-wrapper">
            <input type="radio" id="projects" name="btn" className="input" />
            <div className="btn">
              <span aria-hidden="true">_</span>Projetos
              <span aria-hidden="true" className="btn__glitch">_Projetos</span>
              <label className="number">r3</label>
            </div>
          </div>
        </li>
        <li>
          <div className="radio-wrapper">
            <input type="radio" id="contactme" name="btn" className="input" />
            <div className="btn">
              <span aria-hidden="true">_</span>Contato
              <span aria-hidden="true" className="btn__glitch">_Contato</span>
              <label className="number">r4</label>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}