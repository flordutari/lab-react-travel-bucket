import logo from "./logo.svg";
import "./App.css";
import destinations from "./assets/destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";

function App() {
  // eslint-disable-next-line no-use-before-define
  const [destinationsList, setDestinationsList] = useState(destinations);

  const handleVisitedBtn = (index) => {
    const newDestinationsList = [...destinationsList]
    newDestinationsList[index].visited = true;
    const filteredDestinationsList = newDestinationsList.filter(destination => !destination.visited)
    console.log(index)
    console.log(destinationsList[index].visited)
    setDestinationsList(filteredDestinationsList)
  }

  return (
    <div className="App">
      <main>
        <DestinationBox destinationsList= {destinationsList} handleVisitedBtn={(index)=> handleVisitedBtn(index)}></DestinationBox>
      </main>
    </div>
  );
}

export default App;
