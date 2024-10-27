import React, { useState } from 'react'
import "../App.css"

export default function AddDestinationForm({onAdd}) {

    const [destination, setDestination] = useState({
        name: "",
        image: "",
        continent:"",
        notes:"", 
        visited: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange (event) {
        setDestination(prevStat => ({...prevStat, [event.target.name]: event.target.value}))
    }

    function handleSubmit (event) {
        event.preventDefault();
        onAdd(destination);
        setIsSubmitted(true);        
        setDestination({
            name: "",
            image: "",
            continent:"",
            notes:""
        })
        setIsSubmitted(false);
        
    }

  return (
    <div>
        <h2>🌍 Add your new destination</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder='where to go?'
                value={destination.name} 
                onChange={handleChange}/>

            <input 
                type="text" 
                name="image" 
                placeholder='need an image URL!'
                value={destination.image} 
                onChange={handleChange}/>
            
            {isSubmitted && destination.image && <img src={destination.image} alt="destination-image" />}

            <input  
                type="text" 
                name="continent" 
                placeholder='which continent?'
                value={destination.continent} 
                onChange={handleChange}/>
            <input 
                type="text" 
                name="notes" 
                placeholder='what to do?'
                value={destination.notes} 
                onChange={handleChange}/>

            <button type="submit" className='add-btn'>Add</button>
        </form>
    </div>
  )
}
