import logo from "./logo.svg";
import "./App.css";
import destinations from "./assets/destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";

function App() {
  // eslint-disable-next-line no-use-before-define
  const [destinationsList, setDestinationsList] = useState(destinations);

  return (
    <div className="App">
      <main>
        <DestinationBox destinationsList= {destinationsList}></DestinationBox>
      </main>
    </div>
  );
}

export default App;
