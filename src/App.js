import { useState } from "react";
import destinations from "./destinations.json";
import "./App.css";
import DestinationBox from "./components/DestinationBox";
import AddDestinationForm from "./components/AddDestinationForm";

export default function App() {
  const [destinationData, setDestinationData] = useState(destinations);

  const toggleVisited = name => {
    const newData = [...destinationData];
    setDestinationData(
      newData.map((destination) =>
        destination.name === name
          ? { ...destination, visited: !destination.visited }
          : destination
      )
    );
  }

  const addDestination = () => { }

  const deleteDestination = name => {
    const newData = [...destinationData];
    setDestinationData(
      newData.filter(
        destination => destination.name !== name
      )
    );
  }

  return (
    <div className="App">
      <h1>TRAVEL BUCKET LIST</h1>
      <ul>
        {destinations.map(destination => (
          <li
            key={destination.name}
            className={destination.visited === true
              ? "visited"
              : "notVisited"}>
            <DestinationBox
              destination={destination}
              toggleVisited={toggleVisited}
              deleteDestination={deleteDestination}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
