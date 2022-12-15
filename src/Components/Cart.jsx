import React, { useContext } from "react";
import { ShopContext } from "../context";


function Cart() {
  const {orders, handleSetIsCartOpen} = useContext(ShopContext);
  return (
    <div className="cart black white-text btn-large" onClick={handleSetIsCartOpen}>
      <i className="material-icons ">
        local_grocery_store
      </i>
    {orders.length ? (<span>{orders.length}</span>) : null}
    </div>
  );
}

export default Cart;
