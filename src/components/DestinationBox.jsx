import React from 'react'

const DestinationBox = ({destinationsList}) => {
  return (
    <div>
    {destinationsList.map((destination, index) => {
      console.log("from destinations json: ", destination)
      return (
        <div key={index}>
          <p>{destination.name}</p>
          <img src={destination.image} alt="destination" width={100} />
        </div>
      );
    })}
  </div>
  )
}

export default DestinationBox