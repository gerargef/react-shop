import React from "react";


function Cart(props) {
    const {quantity = 0 , handleSetIsCartOpen} = props;
  return (
    <div className="cart black white-text btn-large" onClick={handleSetIsCartOpen}>
      <i className="material-icons ">
        local_grocery_store
      </i>
    {quantity ? (<span>{quantity}</span>) : null}
    </div>
  );
}

export default Cart;
