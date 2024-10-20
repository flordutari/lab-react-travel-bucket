import React from "react";

function DestinationBox({ destination, markAsVisitied }) {
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
      <button onClick={() => markAsVisitied(destination.name)}>
        {destination.vistited ? "Visited" : "Mark as Visited"}
      </button>
    </div>
  );
}
export default DestinationBox;
