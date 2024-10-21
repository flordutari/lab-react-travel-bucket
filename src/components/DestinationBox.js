import React from "react";
import "../App.css";
export default function DestinationBox({
  cities,
  onDeleteCity,
  onMarkAsVisited,
}) {
  return (
    <>
      <h2>Travel bucket list</h2>
      {cities.map((city, index) => (
        <div key={city.name}>
          <p>{city.name}</p>
          <img key={city.img} className="city-img" src={city.image} />
          <p key={city.continent}>{city.continent}</p>
          <p key={city.notes}>{city.notes}</p>
          <button
            onClick={() => onMarkAsVisited(city)}
            className={!city.visited ? "enabled" : "disabled"}
          >
            Mark as visited
          </button>
          <button onClick={() => onDeleteCity(city)}>Delete</button>
        </div>
      ))}
    </>
  );
}
