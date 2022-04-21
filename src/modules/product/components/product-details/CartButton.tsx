import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../common/cart-shopping/redux/actions";
import { cartProductCountSelector } from "../../../common/cart-shopping/redux/selectors";
import "./../../styles/cart-button.scss";

export const CartButton: FC<IProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addToCart(productId));
  const removeProductFromCart = () => dispatch(removeFromCart(productId));
  const productCount = useSelector(cartProductCountSelector(productId));
  return (
    <div className="add-remove-product">
      <Button onClick={removeProductFromCart} className="add-cart-btn-details">
        <FontAwesomeIcon icon={faMinus} />
      </Button>

      <span className="product-counter">{productCount} </span>

      <Button onClick={addProductToCart} className="add-cart-btn-details">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

type IProps = {
  productId: number;
};
