import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const {
    orders = [],
    handleSetIsCartOpen,
    deleteOrderCB,
    handleDecrement,
    handleIncrement,
  } = props;
  const totalPrice = orders.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart-modal">
      <ul className="collection scale-in-center ">
        <li className="collection-item active grey darken-4">
          Корзина{" "}
          <i
            className="material-icons secondary-content"
            onClick={handleSetIsCartOpen}
          >
            close
          </i>
        </li>
        {orders.length ? (
          orders.map((order) => (
            <CartItem
              key={order.id}
              {...order}
              deleteOrderCB={deleteOrderCB}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          ))
        ) : (
          <li className="collection-item">В корзине пусто</li>
        )}
        <li className="collection-item active grey darken-4">
          Общая стоимость: {totalPrice}
          <span
            className="btn-small white black-text"
            style={{ marginLeft: "2rem" }}
          >
            Купить
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CartList;
