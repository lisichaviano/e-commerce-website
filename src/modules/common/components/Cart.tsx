import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { cartCounterSelector } from "../redux/selectors";

const Cart: FC = () => {
  const counter = useSelector(cartCounterSelector);
  return (
    <Button className="cart">
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      <label className="cart-counter">{counter}</label>
    </Button>
  );
};
export { Cart };
