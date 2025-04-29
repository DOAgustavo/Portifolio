

import StyledFooter from "./estilofooter";

export default function Footer() {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} Giovanni Gustavo. Todos os direitos reservados.</p>
    </StyledFooter>
  );
}