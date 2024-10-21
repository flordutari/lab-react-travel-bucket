import React, { useState } from "react";
import "./App.css";
import destinations from "./assets/destinations.json";
import DestinationBox from "./components/destinationBox";

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

  const DeleteDestination = (name) => {
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
          DeleteDestination={DeleteDestination}
        />
      ))}
    </div>
  );
}

export default App;
