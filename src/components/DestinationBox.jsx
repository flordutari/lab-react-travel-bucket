import React, {useState } from "react";

export const DestinationBox = ({destination, onDelete}) => {
  const [visited, setVisited] = useState(destination.visited || false)
  
  const markAsVisited = () => {
    setVisited(visitedTrue => !visitedTrue); // toggle the state between true and false
  }

  return (
    <div>
      <div className="container">
        <h3>
        {destination.name} {visited && <span style={{color: 'green'}}> ✓ </span>}
        </h3>
        <img src={destination.image} width={200} alt={destination.name} />
        <div className="destination-info">
          <p>
            <strong>Continent: </strong>{destination.continent}
          </p>
          <p>
            <strong>Notes: </strong>{destination.notes}
          </p>
        </div>
        <button className="visited-btn" style={{backgroundColor: visited ? 'green' : 'lightgray', color: visited ? 'white' : 'black'}} onClick={markAsVisited}>
          Visited
        </button>
        <button className="delete-btn" onClick={() => onDelete()}>
          &times;
        </button>
      </div>
    </div>
  );
};