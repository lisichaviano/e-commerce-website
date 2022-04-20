import { FC } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/navbar.scss";
import { Cart } from "./Cart";

const NavBar: FC = () => {
  return (
    <Navbar className="navbar" bg="light" variant="light" fixed="top">
      <Link to="/">
        <img
          alt=""
          src="/images1.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Link>
      <Nav>
        <Link to="/products"> Products </Link>
      </Nav>
      <Cart />
    </Navbar>
  );
};

export { NavBar };
