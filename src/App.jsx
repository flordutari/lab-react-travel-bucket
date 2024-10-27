import { useEffect, useState } from 'react';
import './App.css';
import destinationsdata from "./destination.json"
import DestinationBox from './components/DestinationBox';
import AddDestinationForm from './components/AddDestinationForm';

function App() {

  const [destinations, setDestinations] = useState(destinationsdata);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(destinations);


   function deleteDestination (index) {
    const copiedDestinations = [...destinations]; 
    copiedDestinations.splice(index, 1);       
    setDestinations(copiedDestinations);
  } 

  function addNewDestination (destination) {
    const newDestinations = [...destinations];
    newDestinations.push(destination);
    setDestinations(newDestinations);
  }

  function searchByDestination (searchText) {
    if (searchText.trim().length === 0) {
      setFilteredList(destinations);
      
    } else {
      const filteredResult = destinations.filter(destination => destination.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    );
      setFilteredList(filteredResult);
    }
  }

  function handleSearchChange (event) {
    setSearchText(event.target.value);
    searchByDestination(event.target.value);
  }

  useEffect(() => {
    setFilteredList(destinations);
  }, [destinations])

  return (
    <div className="App">

      <AddDestinationForm onAdd={(destination) => addNewDestination(destination)} />

      <div className='search-bar'>
        <h2>🔍 Search your next destination</h2>
        <input
          type="text" 
          placeholder='search the destination' 
          onChange={handleSearchChange}
          value={searchText}
          />
      </div>

      {filteredList.map((destination, index) => (
        <div>
          <DestinationBox destination= {destination} onDelete={() => deleteDestination(index)} />
        </div>
      ))}


    </div>
  );
}

export default App;
