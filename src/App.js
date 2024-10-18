import { useState } from 'react'
import destinations from './destinations.json';
import './App.css';

export default function App() {

  const [destinationData, setDestinationData] = useState(destinations)


  return (
    <div className="App">
      <ul>
        {destinationData.map(destination => (
          <li>
            <p>{destination.name}</p>
            <img src={destination.image} style={{width: '100px'}} />
          </li>
        ))}
      </ul>
    </div>
  );
}


