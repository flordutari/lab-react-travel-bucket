import "./App.css";
import destinations from "./destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";
import AddDestinationForm from "./components/AddDestinationForm";

function App() {
  const [destination, setDestination] = useState(destinations);

  function deleteCity(deleteCity) {
    console.log(deleteCity);
    const newCityList = destination.filter((city) => city !== deleteCity);
    setDestination(newCityList);
  }

  function markAsVisited(city) {
    // console.log(city);
    // console.log(city.visited);
    // const haveVisited = !city.visited;
    // city.visited = haveVisited;
    // console.log(city);

    let newCityList = [...destination];
    let visitStatus = !city.visited;

    newCityList.map((i) => {
      if (i.name === city.name) {
        i.visited = visitStatus;
      }
    });
    setDestination(newCityList);
    console.log(city.visited);
    console.log(destination);
  }

  function addNewCity(newCity) {
    const newList = [...destination];
    newList.push(newCity);
    setDestination(newList);
  }

  return (
    <>
      {/* {console.log(destination)} */}

      <AddDestinationForm
        cities={destination}
        onAddNewCity={(newCity) => addNewCity(newCity)}
      />

      <DestinationBox
        cities={destination}
        onDeleteCity={(city) => deleteCity(city)}
        onMarkAsVisited={(city) => markAsVisited(city)}
      />
    </>
  );
}

export default App;
