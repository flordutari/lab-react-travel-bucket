import logo from "./logo.svg";
import "./App.css";
import destinations from "./destinations.json";
import { useState } from "react";

function App() {
  const [destination, setDestination] = useState([destinations]);

  return (
    <>
      <h2>Travel bucket list</h2>
      {destinations.map((city) => (
        <div>
          <p>{city.name}</p>
          <img src={city.image} />
        </div>
      ))}
    </>
  );
}

export default App;
