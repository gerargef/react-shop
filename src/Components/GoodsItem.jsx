import React, { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem({
  displayName,
  displayDescription,
  displayAssets,
  price,
  mainId,
  displayType,
  rarity
}) 
{
  const {setOrder} = useContext(ShopContext);
  return (
    <div>
      <div className="row">
        <div className="col s12 m6 goods">
          <div className="card" id={mainId}>
            <div className="card-image">
              <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className="card-content grey lighten-4">
              <h5 className="card-title">{displayName}</h5>
              <h6> {displayDescription}</h6>
            </div>
            <div className="card-action grey lighten-3">
              <p>{displayType} - {rarity.name.toLowerCase()} </p>
            </div>
            <div className="card-action grey lighten-2">
              <button onClick={() => setOrder(displayName, price.finalPrice, mainId)} className="btn right teal lighten-2  ">
                Купить
              </button>
              <span style={{ fontSize: "1.8rem" }}>{price.finalPrice} Ⓥ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;
