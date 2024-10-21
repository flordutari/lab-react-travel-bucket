import { useState } from 'react'
import destinations from './destinations.json';
import './App.css';
import DestinationBox from './components/DestinationBox';


export default function App() {

  const [destinationData, setDestinationData] = useState(destinations)

  function toggleVisited(name) {
    setDestinationData(destinationData.map(destination => 
      destination.name === name 
      ? {...destination, visited: !destination.visited } 
      : destination 
    ))
  }

  function deleteDestination(name) {
    setDestinationData(destinationData.filter(destination => destination.name !== name))
  }

  return (
    <div className='App'>
      <h1>TRAVEL BUCKET LIST</h1>
      <DestinationBox destinations={destinationData} toggleVisited={(name) => toggleVisited(name)} deleteDestination={deleteDestination}/>
    </div>
  );
}


