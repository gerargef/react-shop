import React from "react";
import { lazy, Suspense } from 'react'
import Loader from "./Loader";
 const GoodsItem = lazy(() => import('./GoodsItem'))

function GoodsList(props) {
  const { goods = [], setOrdersCB } = props;
  return (
    <div className="goods">
      {!goods.length ? (
        <h5>Ничего не найдено</h5>
      ) : (
        goods.map((good, index) =>
        <Suspense  key={Math.random()} fallback={<Loader  /> }>
           <GoodsItem key={good.mainId} {...good} setOrdersCB={setOrdersCB} />
        </Suspense>
       )
      )}
    </div>
  );
}

export default GoodsList;
