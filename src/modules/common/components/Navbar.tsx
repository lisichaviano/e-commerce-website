import { FC, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "../styles/navbar.scss";
import { Cart } from "./cart-shopping/Cart";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("/");

  const linkClickHandler = (e: any) => {
    const href = e.target.getAttribute("href");
    setActiveKey(href);
    navigate(href);
    e.preventDefault();
  };

  return (
    <Navbar className="navbar" variant="light" fixed="top">
      <Navbar.Brand className="navbar-brand">
        <Link to="/">
          <img alt="" src="/logo.png" />
          The Store
        </Link>
      </Navbar.Brand>
      <Nav activeKey={activeKey}>
        <Nav.Item>
          <Nav.Link href="/" onClick={linkClickHandler}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products" onClick={linkClickHandler}>
            Products
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Cart />
    </Navbar>
  );
};

export { NavBar };
