import React, { useState } from "react";
import "./App.css";
import destinations from "./assets/destinations.json";
import DestinationBox from "./components/DestinationBox";

function App() {
  const [destinationList, setDestinationList] = useState(destinations);

  const markAsVisited = (name) => {
    const updatedDestinations = destinationList.map((destination) =>
      destination.name === name
        ? { ...destination, visited: true }
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

  return (
    <div className="App">
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
