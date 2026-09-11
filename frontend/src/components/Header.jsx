import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/react.svg";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import {} from "react-icons/fa";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <img src={logo} alt="logo" />
        <Navbar.Brand href="#home">HimalayaShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              
              <FaShoppingCart />addTo Cart
            </Nav.Link>
            <Nav.Link href="#link">
              <FaSignInAlt />Signup
            </Nav.Link>
          </Nav>
          <NavDropdown id="basic-navbar-nav"></NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
