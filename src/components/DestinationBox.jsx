import React, {useState, useEffect} from "react";

export default function DestinationBox({destination, onDelete}) {
  //console.log(destination.name}
  const [visited, setVisited] = useState(destination.visited || false)
  
  const markAsVisited = () => {
    setVisited(visitedTrue => !visitedTrue); // toggle the state between true and false
  }

  if (!destination) {
    return <div> No destination available. </div>
  }

  return (
    <div>
      <div style={{border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '30px', maxWidth:'300px'}}>
        <h3>
        {destination.name} {visited && <span style={{color: 'green'}}> ✓ </span>}
        </h3>
        <img src={destination.image} width={200} alt={destination.name} style={{borderRadius: '10px'}} />
        <div style={{textAlign: 'left'}}>
          <p>
            <strong>Continent: </strong>{destination.continent}
          </p>
          <p>
            <strong>Notes: </strong>{destination.notes}
          </p>
        </div>
        <button style={{borderRadius: '30px', border: 'none', padding: '10px 20px', cursor:'pointer', backgroundColor: visited ? 'green' : 'lightgray'}} onClick={markAsVisited}>
          Visited
        </button>
        <button style={{borderRadius: '50%', border: 'none', padding: '10px 15px', margin: '10px', cursor:'pointer', fontSize: '16px'}} onClick={() => onDelete()}>
          &times;
        </button>
      </div>
      {/* <ul>
        {}
        <li>
          Name: {destination.name}
          Image: <img src={destination.image} alt={destination.name} width={150}/>
          Continent: {destination.continent}
          <button> Visited </button>
          Notes: {destination.notes}
        </li>
      </ul> */}
    </div>
  )
}