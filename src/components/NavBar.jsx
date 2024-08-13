import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Hali Tienda
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/aritos">
              Aritos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/collares">
              Collares
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/pulseras">
              Pulseras
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
