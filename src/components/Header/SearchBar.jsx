import React from "react";

function searchBar() {
  return (
    <div className="SearchBar">
      <form>
        <input type="text" placeholder="Search.." />
        <button type="submit">
          <img src="../Header/search.png" alt="search-bar"></img>
        </button>
      </form>
      <hr />
    </div>
  );
}

export default searchBar;
