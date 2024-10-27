import React from 'react';
import "../App.css"

const DestinationBox = ({destination, index, handleVisitedBtn, handleDeleteBtn}) => {
  return (

        <div className="card" key={index}>
          <p>{destination.name}</p>
          <img src={destination.image} alt="destination" width={200} />
          <button onClick={()=>handleVisitedBtn(index)} >Visited</button>
          <button onClick={()=> handleDeleteBtn(index)} >Delete</button>
        </div>
  )
}

export default DestinationBox