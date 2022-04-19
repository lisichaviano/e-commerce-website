import { FC } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { incrementCounter } from "../../redux/actions";

export const CartButton: FC = () => {
  const dispatch = useDispatch();
  const addToCart = () => dispatch(incrementCounter());
  return (
    <Button onClick={addToCart} className="btn-details">
      Add to cart
    </Button>
  );
};
