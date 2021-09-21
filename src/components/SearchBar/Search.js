import React from "react";
import "./Search.css";

function Search() {
  return (
    <table className="table-1">
      <tr>
        <td>
          <div className="search_div">
            <input
              type="text"
              className="search"
              placeholder="What are you looking for?"
            />
            <span class="input-group-text btn-primary">
              <i class="fas fa-search text-white" aria-hidden="true"></i>
            </span>
          </div>
        </td>
      </tr>
    </table>
  );
}

export default Search;
