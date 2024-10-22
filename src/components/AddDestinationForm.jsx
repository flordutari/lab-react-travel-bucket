import React, {useState} from "react";

export const AddDestinationForm = ({ onAdd }) => {
  const [input, setInput] = useState({name: "", image: "", continent: "", visited: false, notes: ""})

  function handleChange(e) {
    const newInput = {...input};
    newInput[e.target.name] = e.target.value
    setInput({...newInput});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(input);
    setInput({name: "", image: "", continent: "", visited: false, notes: ""});
  } 
 
  return (
    <div className="destination-form">
      <form onSubmit={handleSubmit}>
        <label name="name"> Name:
          <input type="text" placeholder="Enter a new destination name" name="name" onChange={handleChange} value={input.name} />
        </label>
        <label name="image"> Image:
          <input type="text" placeholder="Enter an image url" name="image" onChange={handleChange} value={input.image}/>
        </label>
        <label name="continent"> Continent:
          <input type="text" placeholder="Enter the continent" name="continent" onChange={handleChange} value={input.continent}/>
        </label> 
        <label name="notes"> Notes:
          <input type="text" placeholder="Enter any notes you have" name="notes" onChange={handleChange} value={input.notes}/>
        </label>
        <label name="visited"> Visited?
          <input type="checkbox" name="visited" 
          checked={input.visited} onChange={handleChange}/>
        </label>
        <button className="add-destination-btn">
          Add New Destination
        </button>
      </form>
    </div>
  )
}