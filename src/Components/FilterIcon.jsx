import React, { useContext } from "react";
import { ShopContext } from "../context";
import Categories from "./Categories";

function FilterIcon() {
  const { handleSetIsCategoryOpen, isCategoryOpen } = useContext(ShopContext);
  return (
    <div
      className="category-filter black white-text btn-large"
      onClick={handleSetIsCategoryOpen}
    >
      <i className="material-icons ">filter_list</i>
      {isCategoryOpen ? <Categories /> : null}
    </div>
  );
}

export default FilterIcon;
