import { useState } from "react";
import "./App.css";
import destinations from "./destinations.json";
import { DestinationBox } from "./components/DestinationBox";
import { AddDestinationForm } from "./components/AddDestinationForm";

function App() {
  const [locations, setLocations] = useState(destinations.destinations || []);
  const [input, setInput] = useState({name: "", image: "", continent: "", visited: false, notes: ""})

  const removeDestination = (name) => {
    let newLocations = [...locations];
    newLocations.splice(name, 1);
    setLocations(newLocations)
  };

  function handleChange(e) {
    const newInput = {...input};
    newInput[e.target.name] = e.target.value
    setInput({...newInput});
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newLocations = [...locations];
    newLocations.push(input);
    setLocations(newLocations);
    setInput({name: "", image: "", continent: "", visited: false, notes: ""});
  } 

  return (
    <div className="App">
      <h1>
        Explore Destinations
      </h1>
      <AddDestinationForm handleSubmit={handleSubmit} handleChange={handleChange}/>
      <div className="destination-cards">
        {locations.map((location, name) => (
          <DestinationBox key={location.name} destination={location} onDelete={() => removeDestination(name)} />
        ))}
      </div>
    </div>
  );
};

export default App;