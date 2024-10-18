import logo from "./logo.svg";
import "./App.css";
import destinations from "./destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";

function App() {
  const [destination, setDestination] = useState([destinations]);

  return (
    <>
      {/* {console.log(destinations)} */}
      <DestinationBox cities={destinations} />
    </>
  );
}

export default App;
