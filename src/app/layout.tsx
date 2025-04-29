"use client";

import "./globals.css"; // Importa o arquivo CSS global
import { StyledBody } from "./globals";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <StyledBody>{children}</StyledBody>
    </html>
  );
}