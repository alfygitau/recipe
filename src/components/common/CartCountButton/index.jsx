import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const CartCountButton = ({ cartCount }) => {
  const history = useHistory();
  return (
    <div className="btnCartCount" onClick={()=>history.push('/cart')}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartCountButton;
