import React from "react";
import Categories from "./Categories";

function FilterIcon(props) {
  const { handleSetIsCategoryOpen, isCategoryOpen, getFilterCategory } = props;
  return (
    <div
      className="category-filter black white-text btn-large"
      onClick={handleSetIsCategoryOpen}
    >
      <i className="material-icons ">filter_list</i>
      {isCategoryOpen ? (
        <Categories getFilterCategory={getFilterCategory} handleSetIsCategoryOpen={handleSetIsCategoryOpen} />
      ) : null}
    </div>
  );
}

export default FilterIcon;
