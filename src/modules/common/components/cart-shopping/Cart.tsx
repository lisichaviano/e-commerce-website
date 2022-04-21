import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { cartTotalCount } from "./redux/selectors";
import "./styles/cart.scss";

const Cart: FC = () => {
  const counter = useSelector(cartTotalCount);
  const [showCartDetails, setShowCartDetails] = useState(false);

  return (
    <div
      className="cart"
      onClick={() => {
        setShowCartDetails(true);
      }}
    >
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      <label className="cart-counter">{counter}</label>
      {/* {showCartDetails && <CartDetails />} */}
    </div>
  );
};
export { Cart };
