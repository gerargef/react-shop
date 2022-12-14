import React, { useEffect, useState } from "react";
import Cart from "../Components/Cart";
import CartList from "../Components/CartList";
import FilterIcon from "../Components/FilterIcon";
import GoodsList from "../Components/GoodsList";
import Preloader from "../Components/Preloader";
import Searcher from "../Components/Searcher";
import Toasts from "../Components/Toasts";
import { API_KEY, API_URL } from "../config";

function Main() {
  const [goods, setGoods] = useState([]);
  const [currentGoods, setCurrentGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const handleSetIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleSetIsCategoryOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const setOrdersCB = (name, price, id) => {
    const itemIndex = orders.findIndex((item) => id === item.id);
    if (itemIndex < 0) {
      const newOrderItem = {
        name: name,
        price: price,
        id: id,
        quantity: 1,
      };
      setOrders([...orders, newOrderItem]);
    } else {
      const orderItem = orders.map((orderItem, index) => {
        if (itemIndex === index) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrders(orderItem);
    }
    setAlertName(name);
  };

  const deleteOrderCB = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };
  const handleDecrement = (id) => {
    const orderItem = orders.map((orderItem) => {
      if (orderItem.id === id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrders(orderItem);
  };
  const handleIncrement = (id) => {
    const orderItem = orders.map((orderItem) => {
      if (orderItem.id === id && orderItem.quantity > 1 ) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrders(orderItem);
  };
  const closeAlert = () => {
    setAlertName("");
  };
  const getSearchValue = (searchValue) => {
    if (searchValue === "") {
      setCurrentGoods(goods);
    }
    setCurrentGoods(
      goods.filter((good) =>
        good.displayName.toLowerCase().startsWith(searchValue.toLowerCase())
      )
    );
  };
  const getFilterCategory = (filterCategory) => {
    if (filterCategory === "") {
      setCurrentGoods(goods);
      return;
    }
    if (filterCategory === "Комплект") {
      setCurrentGoods(
        goods.filter(
          (good) =>
            good.displayType.startsWith("Предметы в комплекте") ||
            good.displayType === "Комплект предметов"
        )
      );
      return;
    }
    if (filterCategory === "Экипировка") {
      setCurrentGoods(
        goods.filter(
          (good) =>
            good.displayType === filterCategory ||
            good.displayType.toLowerCase().includes("украшен")
        )
      );
      return;
    }
    setCurrentGoods(
      goods.filter((good) => good.displayType === filterCategory)
    );
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setCurrentGoods(data.shop);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container content">
      <Searcher getSearchValue={getSearchValue} />
      <FilterIcon
        handleSetIsCategoryOpen={handleSetIsCategoryOpen}
        isCategoryOpen={isCategoryOpen}
        getFilterCategory={getFilterCategory}
      />
      <Cart
        quantity={orders.length}
        handleSetIsCartOpen={handleSetIsCartOpen}
      />
      {alertName ? <Toasts closeAlert={closeAlert} name={alertName} /> : null}
      {isCartOpen ? (
        <CartList
          orders={orders}
          handleSetIsCartOpen={handleSetIsCartOpen}
          deleteOrderCB={deleteOrderCB}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ) : null}
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={currentGoods} setOrdersCB={setOrdersCB} />
      )}
    </div>
  );
}

export default Main;
