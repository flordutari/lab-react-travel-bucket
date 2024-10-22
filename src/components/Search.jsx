import React, { useState } from "react";
import { DestinationBox } from "./DestinationBox";


export const Search = ({ filteredDestinations, setFilteredDestinations }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query) {
      setFilteredDestinations(filteredDestinations)
      setSearchQuery(query)
      return
    }

    const searchList = filteredDestinations.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredDestinations(searchList);
  };

  return (
    <div className="search-bar">
      <input type="text" name="search" placeholder="Search" value={searchQuery} onChange={handleSearch} />
      {filteredDestinations.map((destination, index) => {
        return (
          <DestinationBox key={destination.name} destination={destination} />
        )
      })}
    </div>
  )
}