import { useState, useEffect } from "react";
import "./DestinationBox.css";

export default function DestinationBox({ destination, toggleVisited, deleteDestination }) {
    const [currentDestination, setCurrentDestination] = useState(destination)
    
    useEffect (() => {
        setCurrentDestination(destination);
    }, [destination]);

    return (
        <div>
            <p id="locName">{currentDestination.name.toUpperCase()}</p>
            <img src={currentDestination.image} />
            <p className="mediumPTag">Continent: {currentDestination.continent}</p>
            <p className="mediumPTag">Suggestions: {currentDestination.notes}</p>
            <p>
                <input
                    type="checkbox"
                    checked={currentDestination.visited}
                    onChange={() => toggleVisited(currentDestination.name)} />
                Mark as visited
            </p>
            <button
                id="deletebtn"
                onClick={() => deleteDestination(currentDestination.name)}>
                Delete Destination
            </button>
        </div>
    );
}
