import React from 'react'
import './DestinationBox.css';

export default function DestinationBox({destinations, toggleVisited, deleteDestination}) {

    return (
    <div>
        <ul>
        {destinations.map(destination => (
            <li key={destination.name}
            className={destination.visited === true ? 'visited' : 'notVisited'}>
            <p id='locName'>{destination.name.toUpperCase()}</p>
            <img src={destination.image} />
            <p className='mediumPTag'>Continent: {destination.continent}</p>
            <p className='mediumPTag'>Suggestions: {destination.notes}</p>
            <p>
                <input 
                type='checkbox' 
                checked={destination.visited} 
                onChange={() => toggleVisited(destination.name)} 
                /> 
                Mark as visited
            </p>
            <button id='deletebtn' onClick={() => deleteDestination(destination.name)}>Delete Destination</button>
            </li>
        ))}
        </ul>
    </div>
    )
}
