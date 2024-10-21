import logo from "./logo.svg";
import "./App.css";
import destinations from "./destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";

function App() {
  const [destination, setDestination] = useState(destinations);

  function deleteCity(deleteCity) {
    console.log(deleteCity);
    const newCityList = destination.filter((city) => city !== deleteCity);
    setDestination(newCityList);
  }
  return (
    <>
      {console.log(destination)}
      <DestinationBox
        cities={destination}
        onDeleteCity={(city) => deleteCity(city)}
      />
    </>
  );
}

export default App;
