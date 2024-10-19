import { useState, useEffect } from 'react';
import './App.css';
import destinations from "./destinations.json";
import DestinationBox from './components/DestinationBox';

function App() {
  console.log(destinations);
  const [locations, setLocations] = useState(destinations.destinations || []);

  const removeDestination = (index) => {
    let newLocations = [...locations];
    newLocations.splice(index, 1);
    setLocations(newLocations)
  }

  return (
    <div className="App">
      {/* <ul>
      {locations.map((location, index) => (
        <li key={index}>
          {location.name} {" "} 
          <img src={location.image} width={150} alt={location.name} />
        </li>
      ))}
      </ul> */}
      <h1>
        Explore Destinations
      </h1>
      <div>
        {locations.map((location, index) => (
          <DestinationBox key={index} destination={location} onDelete={(index) => removeDestination(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;


  // useEffect(() => {
  //   fetch('./destinations.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setLocations(data)
  //   })
  //   .catch((error) => console.error("Error loading json", error))
  // }, []);