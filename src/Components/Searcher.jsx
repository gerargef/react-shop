import React from "react";
import { useState } from "react";

function Searcher({ getSearchValue }) {
  const [search, setSearch] = useState("");
  const handleKey = (e) => {
    if (e.key === "Backspace" && search.length ===1 ) {
      getSearchValue('');
    }
    if (e.key !== "Enter") {
      return;
    }
    getSearchValue(search);
  };
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
              onKeyDown={handleKey}
            />
          </div>
          <button
            className="waves-effect waves-light btn  grey darken-2 search-btn"
            onClick={() => getSearchValue(search)}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searcher;
