import { useState } from "react";
import "./App.css";
import destinations from "./destinations.json";
import { DestinationBox } from "./components/DestinationBox";
import { AddDestinationForm } from "./components/AddDestinationForm";
import { Search } from "./components/Search";

function App() {
  const [locations, setLocations] = useState(destinations.destinations || []);

  const [filteredDestinations, setFilteredDestinations] = useState(destinations.destinations);


  const removeDestination = (name) => {
    let newLocations = [...locations];
    newLocations.splice(name, 1);
    setLocations(newLocations)
  };

  function addInputToLocations(location) {
    const newLocations = [...locations];
    newLocations.push(location);
    setLocations(newLocations);
  }

  // function filterDestinations(location, input){
  //   const filteredDestinations = [...locations];
  //   filteredDestinations.filter((location) => {
  //     if(input === ''){
  //       return location;
  //     } else {
  //       return location.text.toLowerCase().includes(input)
  //     }
  //   })
  //   return (
  //     <ul>
  //       {filteredDestinations.map((location) => (
  //         <li key={location.name}>{location}</li>
  //       ))}
  //     </ul>
  //   )
  // }

  return (
    <div className="App">
      <h1>
        Explore Destinations
      </h1>
      <AddDestinationForm onAdd={(newlocation) => {addInputToLocations(newlocation)}}/>
      <div>
        <Search filteredDestinations={filteredDestinations} setFilteredDestinations={setFilteredDestinations}/>
      </div>
      <div className="destination-cards">
        {locations.map((location, name) => (
          <DestinationBox key={location.name} destination={location} onDelete={() => removeDestination(name)} />
        ))}
      </div>
    </div>
  );
};

export default App;