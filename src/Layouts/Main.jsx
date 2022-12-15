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
  const {setGoods, loading, isCartOpen, alertName } = useContext(ShopContext);
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
