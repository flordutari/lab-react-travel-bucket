import React, {useState} from 'react'
import "../App.css"

export default function DestinationBox({destination, onDelete}) {

  const [isVisited, setIsVisited] = useState(destination.visited); 
  
  function handleClick () {
    setIsVisited(prevState=> !prevState);
  }  

  return (
    <div className='destination-box'>
        <h2>{destination.name}</h2>
        <p>{destination.continent}</p>
        <p>{destination.notes}</p>
        <img src={destination.image} width={500}/>
        <button onClick={handleClick}>{isVisited? "✅ Visited already": "Mark as Visited" }</button>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}
