import { FC } from "react";
import { Offcanvas } from "react-bootstrap";

import { ProductListCart } from "./ProductListCart";
import "./styles/cart-details.scss";

const CartDetails: FC<IProps> = ({ show, onHide }) => {
  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products in the cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <div className="offcanvas-body">
            <ProductListCart />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export { CartDetails };

type IProps = {
  show: boolean;
  onHide: () => void;
};
