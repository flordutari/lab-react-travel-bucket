import React, { useState } from "react";

export default function AddDestinationForm({ onAddDestination }) {
  const [formValues, setFormValues] = useState({
    name: "",
    image: "",
    continent: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.image && formValues.continent) {
      onAddDestination(formValues);
      setFormValues({ name: "", image: "", continent: "", notes: "" });
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Destination Name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formValues.image}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="continent"
        placeholder="Continent"
        value={formValues.continent}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formValues.notes}
        onChange={handleInputChange}
      />
      <button type="submit">Add Destination</button>
    </form>
  );
}
