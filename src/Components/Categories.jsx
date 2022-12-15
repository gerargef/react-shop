import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";

function Categories() {
  const { filterGoods } = useContext(ShopContext);
  const [category, setCategory] = useState("");
  useEffect(() => {
    filterGoods(category);
  }, [category]);
  return (
    <div className="categories-mobile  categories">
      <form
        action="#"
        className="categories-form scale-up-center "
        onClick={(e) => e.stopPropagation()}
      >
        <p>
          <label className="black-text">
            <input
              name="group1"
              type="radio"
              value=""
              onChange={(e) => setCategory(e.target.value)}
              checked={category === ""}
            />
            <span>Всё</span>
          </label>
        </p>
        <p>
          <label className="black-text">
            <input
              name="group1"
              type="radio"
              value="Экипировка"
              onChange={(e) => setCategory(e.target.value)}
              checked={category === "Экипировка"}
            />
            <span>Экипировка</span>
          </label>
        </p>
        <p>
          <label className="black-text">
            <input
              name="group1"
              type="radio"
              value="Инструмент"
              onChange={(e) => setCategory(e.target.value)}
              checked={category === "Инструмент"}
            />
            <span>Инструмент</span>
          </label>
        </p>
        <p>
          <label className="black-text">
            <input
              name="group1"
              type="radio"
              value="Эмоция"
              onChange={(e) => setCategory(e.target.value)}
              checked={category === "Эмоция"}
            />
            <span>Эмоция</span>
          </label>
        </p>
        <p>
          <label className="black-text">
            <input
              name="group1"
              type="radio"
              value="Комплект"
              onChange={(e) => setCategory(e.target.value)}
              checked={category === "Комплект"}
            />
            <span>Комплект предметов</span>
          </label>
        </p>
        <p>
          <label className="black-text">
            <input
              name="group1"
              type="radio"
              value="Дельтаплан"
              onChange={(e) => setCategory(e.target.value)}
              checked={category === "Дельтаплан"}
            />
            <span>Дельтаплан</span>
          </label>
        </p>
      </form>
    </div>
  );
}

export default Categories;
