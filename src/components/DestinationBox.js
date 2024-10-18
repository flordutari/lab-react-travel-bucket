import React from "react";

export default function DestinationBox({ cities }) {
  return (
    <>
      {console.log(cities)}

      <h2>Travel bucket list</h2>
      {cities.map((city) => (
        <div>
          <p>{city.name}</p>
          <img className="city-img" src={city.image} />
          <p>{city.continent}</p>
          <p>{city.notes}</p>
          <button>Mark as visited</button>
        </div>
      ))}
    </>
  );
}
