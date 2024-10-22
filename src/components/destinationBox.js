import React from "react";

function DestinationBox({ destination, markAsVisited, deleteDestination }) {
  return (
    <div>
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} width={150} />
      <p>
        <strong>Continent:</strong>
        {destination.continent}
      </p>
      <p>
        <strong>Notes:</strong>
        {destination.notes}
      </p>
      <button onClick={() => markAsVisited(destination.name)}>
        {destination.visited ? "Visited" : "Mark As Visited"}
      </button>

      <button onClick={() => deleteDestination(destination.name)}>
        Delete
      </button>
    </div>
  );
}
export default DestinationBox;
