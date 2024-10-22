import React from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search Destinations..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}
