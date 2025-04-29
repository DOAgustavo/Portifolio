"use client";

import StyledContactMe from "./estiloContactme";

export default function ContactMe() {
  return (
    <StyledContactMe id="contactme">
      <h2>Contato</h2>
      <p>
        Entre em contato comigo pelo e-mail:{" "}
        <a href="mailto:giovannigustavos@gmail.com">giovannigustavos@gmail.com</a>
      </p>
      <div className="buttons">
        {/* Botão do WhatsApp */}
        <a
          href="https://wa.me/91993727110"
          target="_blank"
          rel="noopener noreferrer"
          className="btn2"
        >
          <span>WhatsApp</span>
        </a>

        {/* Botão do LinkedIn */}
        <a
          href="https://www.linkedin.com/in/giovanni-sousa-b69a47155/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn2"
        >
          <span>LinkedIn</span>
        </a>
      </div>
    </StyledContactMe>
  );
}