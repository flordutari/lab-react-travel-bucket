import { useState } from "react";
import "./AddDestinationForm.css";

export default function AddDestinationForm({ addDestination }) {
    const [input, setInput] = useState("");

    const handleSubmit = () => { };
    return (
        <div>
            <h1>Add new bucket list destination</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    City Name:
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter city name"
                    />
                </label>
                <label>
                    Continent:
                    <input
                        type="text"
                        name="continent"
                        value={input.continent}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter name of continent"
                    />
                </label>
                <label>
                    Notes:
                    <input
                        type="text"
                        name="notes"
                        value={input.notes}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter visit notes"
                    />
                </label>
                <button type="submit">Add!</button>
            </form>
        </div>
    );
}
