import { FC } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/navbar.scss";

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
      <Button className="icon cart">
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </Button>
    </Navbar>
  );
};

export { NavBar };
