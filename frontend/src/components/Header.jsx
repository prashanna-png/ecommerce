import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt, FaUser } from "react-icons/fa";
import logo from "../assets/react.svg";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Container>
        {/* Brand + logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img src={logo} alt="HimalayaShop logo" width="30" height="30" />
          HimalayaShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart">
              <FaShoppingCart /> Cart
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              <FaSignInAlt /> Sign In
            </Nav.Link>

            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item as={NavLink} to="/profile">
                <FaUser /> Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
