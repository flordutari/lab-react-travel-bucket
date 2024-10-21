import "./App.css";
import destinations from "./assets/destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";

function App() {
  // eslint-disable-next-line no-use-before-define
  const [destinationsList, setDestinationsList] = useState(destinations);

  const handleVisitedBtn = (index) => {
    setDestinationsList((prevDestinationsList)=> {
      const newDestinationsList = [...prevDestinationsList]
      newDestinationsList[index].visited = true;
      const filteredDestinationsList = newDestinationsList.filter(destination => !destination.visited)
      console.log(filteredDestinationsList)
      return filteredDestinationsList
    })
  }

  const handleDeleteBtn = (index) => {
    setDestinationsList((prevDestinationsList)=>{

      const newDestinationsList = [...prevDestinationsList]
      newDestinationsList.splice(index, 1)
      console.log(newDestinationsList)
      return newDestinationsList
    })
  }

  return (
    <div className="App">
      <main>
        <DestinationBox destinationsList= {destinationsList} handleVisitedBtn={(index)=> handleVisitedBtn(index)} handleDeleteBtn={(index)=>handleDeleteBtn(index)}></DestinationBox>
      </main>
    </div>
  );
}

export default App;
