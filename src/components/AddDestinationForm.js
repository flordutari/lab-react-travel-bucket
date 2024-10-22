import React, { useState } from "react";

export default function AddDestinationForm({ addDestination }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    continent: "",
    notes: "",
    visited: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name && formData.image && formData.continent) {
      addDestination(formData);

      setFormData({
        name: "",
        image: "",
        continent: "",
        notes: "",
        visited: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Destination</h3>
      <input
        type="text"
        name="name"
        placeholder="Destination Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="continent"
        placeholder="Continent"
        value={formData.continent}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleInputChange}
      />
      <button type="submit">Add Destination</button>
    </form>
  );
}
