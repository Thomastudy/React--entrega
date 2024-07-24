import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Hali Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Tienda">Tienda</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
