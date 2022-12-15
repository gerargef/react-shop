import React, { useContext } from "react";
import { lazy, Suspense } from 'react'
import { ShopContext } from "../context";
import Loader from "./Loader";
 const GoodsItem = lazy(() => import('./GoodsItem'))

function GoodsList() {
  const {currentGoods} = useContext(ShopContext);
  return (
    <div className="goods">
      {!currentGoods.length ? (
        <h5>Ничего не найдено</h5>
      ) : (
        currentGoods.map((good) =>
        <Suspense  key={Math.random()} fallback={<Loader /> }>
           <GoodsItem key={good.mainId} {...good} />
        </Suspense>
       )
      )}
    </div>
  );
}

export default GoodsList;
