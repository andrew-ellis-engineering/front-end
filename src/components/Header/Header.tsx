import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  const className = "bg-dark navbar-dark";
  return (
    <Navbar className={className}>
      <Container>
        <Navbar.Brand>
          Andrew Ellis, Software Engineer
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
