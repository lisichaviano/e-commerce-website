import { FC } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/navbar.scss";
import "../styles/cart-shopping.scss";

const NavBar: FC = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand href="#home" style={{ padding: 0 }}>
        <img
          alt=""
          src="/images1.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="navbar-link" href="#products">
          Products
        </Nav.Link>
      </Nav>
      <Button className="icon cart">
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </Button>
    </Navbar>
  );
};

export { NavBar };
