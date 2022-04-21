import { FC } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  cartItemsWithProductSelector,
  cartTotalCountSelector,
  cartTotalPriceSelector,
} from "./redux/selectors";
import "./styles/product-list-cart.scss";
import { clearCart } from "./redux/actions";
import { formatMoney } from "../../../lib/utils";

export const ProductListCart: FC = () => {
  const dispatch = useDispatch();

  const cartItemsWithProduct = useSelector(cartItemsWithProductSelector);
  const totalCount = useSelector(cartTotalCountSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const clearCartHandle = () => {
    dispatch(clearCart());
  };
  return (
    <ListGroup variant="flush" className="list-group">
      <ListGroup.Item className="title-list">
        <span>Product</span> <span className="price">Price</span>
      </ListGroup.Item>
      {cartItemsWithProduct.map((product) => (
        <ListGroup.Item className="list-item">
          <span className="product-item">
            {product.product?.title}
            <span className="qty">Qty: ({product.count})</span>
          </span>
          <span className="price">
            {formatMoney(product.product?.price ?? 0)} x {product.count}
          </span>
        </ListGroup.Item>
      ))}
      <ListGroup.Item className="list-item">
        <span className="subtotal">
          Subtotal ({totalCount} item): {formatMoney(totalPrice)}
        </span>
      </ListGroup.Item>
      <ListGroup.Item className="list-buttons">
        <Button onClick={clearCartHandle}>Clear</Button>
        <Button>Pay</Button>
      </ListGroup.Item>
    </ListGroup>
  );
};
