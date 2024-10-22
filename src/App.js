import React, { useState } from "react";
import "./App.css";
import destinations from "./assets/destinations.json";
import DestinationBox from "./components/DestinationBox";
import AddDestinationForm from "./components/AddDestinationForm";

function App() {
  const [destinationList, setDestinationList] = useState(destinations);

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

  const addDestination = (newDestination) => {
    setDestinationList([
      ...destinationList,
      { ...newDestination, visited: false },
    ]);
  };

  return (
    <div className="App">
      <AddDestinationForm onAddDestination={addDestination} />
      {destinationList.map((destination, index) => (
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
