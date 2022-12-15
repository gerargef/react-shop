import React, { useContext } from "react";
import { ShopContext } from "../context";

function CartItem(props) {
  const { name, price, id, quantity } = props;
  const {deleteOrder, decrement, increment} = useContext(ShopContext);
  return (
    <div>
      <li className="collection-item">
        {name} 
        <span><i className="material-icons cart-btn" onClick={() => decrement(id)}>add</i></span>
        x {quantity}
        <span><i className="material-icons cart-btn" onClick={() => increment(id)}>remove</i></span>
        = {price * quantity}
        <i
          className="material-icons secondary-content grey-text"
          onClick={() => deleteOrder(id)}
        >
          close
        </i>
      </li>
    </div>
  );
}

export default CartItem;
