import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="ابحث عن قطعة أثرية..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{padding: "10px", width: "300px", margin: "20px 0"}}
    />
  );
}

export default SearchBar;