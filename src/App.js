import React, { useState } from "react";
import "./App.css";
import destinations from "./assets/destinations.json";
import DestinationBox from "./components/DestinationBox";
import SearchBar from "./components/SearchBar";
import AddDestinationForm from "./components/AddDestinationForm";

function App() {
  const [destinationList, setDestinationList] = useState(destinations);
  const [searchTerm, setSearchTerm] = useState("");

  const markAsVisited = (name) => {
    const updatedDestinations = destinationList.map((destination) =>
      destination.name === name
        ? { ...destination, visited: !destination.visited }
        : destination
    );
    setDestinationList(updatedDestinations);
  };

  const deleteDestination = (name) => {
    const updatedDestinations = destinationList.filter(
      (destination) => destination.name !== name
    );
    setDestinationList(updatedDestinations);
  };

  const filteredDestinations = destinationList.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addDestination = (newDestination) => {
    setDestinationList((prevDestinations) => [
      ...prevDestinations,
      newDestination,
    ]);
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <AddDestinationForm addDestination={addDestination} />

      {filteredDestinations.map((destination, index) => (
        <DestinationBox
          key={index}
          destination={destination}
          markAsVisited={markAsVisited}
          deleteDestination={deleteDestination}
        />
      ))}
    </div>
  );
}

export default App;
