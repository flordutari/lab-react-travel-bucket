import React from "react";

export default function DestinationBox({ cities }) {
  function handleMarkAsVisited(city) {
    console.log(city);
    console.log(city.visited);
    const haveVisited = !city.visited;
    city.visited = haveVisited;
    console.log(city.visited);
  }

  return (
    <>
      {console.log(cities)}

      <h2>Travel bucket list</h2>
      {cities.map((city, index) => (
        <div>
          <p key={city.name}>{city.name}</p>
          <img key={city.img} className="city-img" src={city.image} />
          <p key={city.continent}>{city.continent}</p>
          <p key={city.notes}>{city.notes}</p>
          <button onClick={() => handleMarkAsVisited(city)}>
            Mark as visited
          </button>
        </div>
      ))}
    </>
  );
}
