import React, { useState } from "react";

export default function AddDestinationForm({ cities, onAddNewCity }) {
  //   const [input, setInput] = useState("");
  const [newDestination, setNewDestination] = useState({
    name: "",
    image: "",
    continent: "",
    visited: false,
    notes: "",
  });

  const handleInputChange = (event) => {
    const input = { ...newDestination };

    input[event.target.name] = event.target.value;

    setNewDestination(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNewCity(newDestination);
    setNewDestination({
      name: "",
      image: "",
      continent: "",
      visited: false,
      notes: "",
    });
  };
  //   function addNewCity(event) {
  //     event.preventDefault();
  //     console.log(event);
  //     // const newCity = [...destination];
  //     // newCity.push(newDestination);
  //     // setCities(newShoppingListItems);
  //     // setInput({ name: "", category: "", quantity: 1 });
  //   }

  return (
    <>
      <div>AddDestinationForm</div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="City name"
          onChange={handleInputChange}
          value={newDestination.name}
        ></input>
        <input
          type="url"
          name="image"
          placeholder="Image url "
          onChange={handleInputChange}
          src={newDestination.image}
        ></input>
        <input
          type="text"
          name="continent"
          placeholder="Continent"
          onChange={handleInputChange}
          value={newDestination.text}
        ></input>
        <input
          type="textarea"
          name="notes"
          placeholder="Notes"
          onChange={handleInputChange}
          value={newDestination.notes}
        ></input>
        <button type="submit">Add new city</button>
      </form>
    </>
  );
}
