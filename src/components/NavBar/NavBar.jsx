import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md" className="fixed-top bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/" className="navbar-brand text-success fw-semibold">
            React Restaurant
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav.Link href="/" className="active text-uppercase">Home</Nav.Link>
            <Nav.Link href="/menu" className="active text-uppercase">Menu</Nav.Link>
            <Nav.Link href="/nosotros" className="active text-uppercase">Nosotros</Nav.Link>
            <Nav.Link href="/contacto" className="active text-uppercase">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;