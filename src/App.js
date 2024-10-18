import logo from "./logo.svg";
import "./App.css";
import destinations from "./assets/destinations.json";
import { useState } from "react";

function App() {
  // eslint-disable-next-line no-use-before-define
  const [destinationsList, setDestinationsList] = useState(destinations);

  return (
    <div className="App">
      <main>
        <ul>
          {destinationsList.map((destination, index) => {
            console.log("from destinations json: ", destination)
            return (
              <li key={index}>
                <p>{destination.name}</p>
                <img src={destination.image} alt="destination" />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
