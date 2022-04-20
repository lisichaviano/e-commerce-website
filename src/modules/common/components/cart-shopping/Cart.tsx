import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useSelector } from "react-redux";
import { cartTotalCount } from "./redux/selectors";
import "./styles/cart.scss";

const Cart: FC = () => {
  const counter = useSelector(cartTotalCount);
  return (
    <div className="cart">
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      <label className="cart-counter">{counter}</label>
    </div>
  );
};
export { Cart };
