import React, { useState } from "react";
import "./App.css";
import destinations from "./assets/destinations.json";
import DestinationBox from "./assets/destinationBox";

function App() {
  const [destinationList, setDestinationList] = useState(destinations);

  return (
    <div className="App">
      {destinationList.map((destination, index) => (
        <DestinationBox key={index} destination={destination} />
      ))}
    </div>
  );
}

export default App;
