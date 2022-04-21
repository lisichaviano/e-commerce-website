import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { CartDetails } from "./CartDetails";
import { cartTotalCountSelector } from "./redux/selectors";
import "./styles/cart.scss";

const Cart: FC = () => {
  const counter = useSelector(cartTotalCountSelector);
  const [showCartDetails, setShowCartDetails] = useState(false);

  const hideCallback = useCallback(() => {
    setTimeout(() => {
      setShowCartDetails(false);
    }, 0);
  }, []);

  return (
    <div
      className="cart"
      onClick={() => {
        setShowCartDetails(true);
      }}
    >
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
      <label className="cart-counter">{counter}</label>
      <CartDetails show={showCartDetails} onHide={hideCallback} />
    </div>
  );
};
export { Cart };
