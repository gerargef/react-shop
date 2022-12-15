import React, { useContext, useEffect, useState } from "react";
import Cart from "../Components/Cart";
import CartList from "../Components/CartList";
import FilterIcon from "../Components/FilterIcon";
import GoodsList from "../Components/GoodsList";
import Preloader from "../Components/Preloader";
import Searcher from "../Components/Searcher";
import Toasts from "../Components/Toasts";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";

function Main() {
  const {goods, setGoods, currentGoods, loading, orders, isCartOpen, alertName, isCategoryOpen } = useContext(ShopContext);
  // const [loading, setLoading] = useState(true);
  // const [orders, setOrders] = useState([]);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [alertName, setAlertName] = useState("");
  // const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  // const handleSetIsCartOpen = () => {
  //   setIsCartOpen(!isCartOpen);
  // };
  // const handleSetIsCategoryOpen = () => {
  //   setIsCategoryOpen(!isCategoryOpen);
  // };

  // const setOrdersCB = (name, price, id) => {
  //   const itemIndex = orders.findIndex((item) => id === item.id);
  //   if (itemIndex < 0) {
  //     const newOrderItem = {
  //       name: name,
  //       price: price,
  //       id: id,
  //       quantity: 1,
  //     };
  //     setOrders([...orders, newOrderItem]);
  //   } else {
  //     const orderItem = orders.map((orderItem, index) => {
  //       if (itemIndex === index) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrders(orderItem);
  //   }
  //   setAlertName(name);
  // };

  // const deleteOrderCB = (id) => {
  //   setOrders(orders.filter((order) => order.id !== id));
  // };
  // const handleDecrement = (id) => {
  //   const orderItem = orders.map((orderItem) => {
  //     if (orderItem.id === id) {
  //       return {
  //         ...orderItem,
  //         quantity: orderItem.quantity + 1,
  //       };
  //     } else {
  //       return orderItem;
  //     }
  //   });
  //   setOrders(orderItem);
  // };
  // const handleIncrement = (id) => {
  //   const orderItem = orders.map((orderItem) => {
  //     if (orderItem.id === id && orderItem.quantity > 1 ) {
  //       return {
  //         ...orderItem,
  //         quantity: orderItem.quantity - 1,
  //       };
  //     } else {
  //       return orderItem;
  //     }
  //   });
  //   setOrders(orderItem);
  // };
  // const closeAlert = () => {
  //   setAlertName("");
  // };
  // const getSearchValue = (searchValue) => {
  //   if (searchValue === "") {
  //     setCurrentGoods(goods);
  //   }
  //   setCurrentGoods(
  //     goods.filter((good) =>
  //       good.displayName.toLowerCase().startsWith(searchValue.toLowerCase())
  //     )
  //   );
  // };
  // const getFilterCategory = (filterCategory) => {
  //   if (filterCategory === "") {
  //     setCurrentGoods(goods);
  //     return;
  //   }
  //   if (filterCategory === "Комплект") {
  //     setCurrentGoods(
  //       goods.filter(
  //         (good) =>
  //           good.displayType.startsWith("Предметы в комплекте") ||
  //           good.displayType === "Комплект предметов"
  //       )
  //     );
  //     return;
  //   }
  //   if (filterCategory === "Экипировка") {
  //     setCurrentGoods(
  //       goods.filter(
  //         (good) =>
  //           good.displayType === filterCategory ||
  //           good.displayType.toLowerCase().includes("украшен")
  //       )
  //     );
  //     return;
  //   }
  //   setCurrentGoods(
  //     goods.filter((good) => good.displayType === filterCategory)
  //   );
  // };

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container content">
      <Searcher />
      <FilterIcon/>
      <Cart/>
      {alertName ? <Toasts /> : null}
      {isCartOpen ? <CartList/> : null}
      {loading ? <Preloader />
      : (
        <GoodsList/>
      )}
    </div>
  );
}

export default Main;
