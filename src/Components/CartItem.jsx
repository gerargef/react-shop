import React from "react";

function CartItem(props) {
  const { name, price, id, quantity, deleteOrderCB, handleDecrement, handleIncrement } = props;
  const handleOrderDelete = () => {
    deleteOrderCB(id);
  };
  return (
    <div>
      <li className="collection-item">
        {name} 
        <span><i className="material-icons cart-btn" onClick={() => handleDecrement(id)}>add</i></span>
        x {quantity}
        <span><i className="material-icons cart-btn" onClick={() => handleIncrement(id)}>remove</i></span>
        = {price * quantity}
        <i
          className="material-icons secondary-content grey-text"
          onClick={handleOrderDelete}
        >
          close
        </i>
      </li>
    </div>
  );
}

export default CartItem;
