import React from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search Destinations..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}
