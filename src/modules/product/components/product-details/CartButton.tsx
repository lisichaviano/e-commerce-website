import { FC } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../common/components/cart-shopping/redux/actions";

export const CartButton: FC<IProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addToCart(productId));
  return (
    <Button onClick={addProductToCart} className="add-cart-btn-details">
      Add to cart
    </Button>
  );
};

type IProps = {
  productId: number;
};
