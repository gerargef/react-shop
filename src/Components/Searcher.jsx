import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ShopContext } from "../context";

function Searcher() {
  const { searchGoods } = useContext(ShopContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchGoods(search)
  }, [search])
  return (
    <div className="searcher">
      <div className="row">
        <div className="col s12 search-container">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}

            />
          </div>
          <button
            className="waves-effect waves-light btn  grey darken-2 search-btn"
            onClick={() => searchGoods(search)}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searcher;
