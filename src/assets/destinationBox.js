import React from "react";

function DestinationBox({ destination }) {
  return (
    <div>
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} width={150} />
      <p>
        <strong>Notes:</strong>
        {destination.notes}
      </p>
      <button>Mark as Visited</button>
    </div>
  );
}
export default DestinationBox;
