import React from "react";
import Navbar from "../navBar/navBar";
import Footer from "../footer/footer";

interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ width: "250px", flexShrink: 0 }}>
        <Navbar />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Garante que o Footer fique na base
          alignItems: "center",
          padding: "2rem",
          textAlign: "center",
          overflowY: "auto",
          margin: "0 30px", // Remove margem superior desnecessária
        }}
      >
        <div style={{ flex: 1, width: "100%" }}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}