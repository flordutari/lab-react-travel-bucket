import "./App.css";
import destinations from "./assets/destinations.json";
import { useState } from "react";
import DestinationBox from "./components/DestinationBox";
import NewDestinationForm from "./components/NewDestinationForm";

function App() {
  // eslint-disable-next-line no-use-before-define
  const [destinationsList, setDestinationsList] = useState(destinations);
  const [input, setInput] = useState({name:"", image:"", continent:"", visited: false, notes:""})

  const handleVisitedBtn = (index) => {
    setDestinationsList((prevDestinationsList)=> {
      const newDestinationsList = [...prevDestinationsList]
      newDestinationsList[index].visited = true;
      const filteredDestinationsList = newDestinationsList.filter(destination => !destination.visited)
      console.log(filteredDestinationsList)
      return filteredDestinationsList
    })
  }

  const handleDeleteBtn = (index) => {
    setDestinationsList((prevDestinationsList)=>{

      const newDestinationsList = [...prevDestinationsList]
      newDestinationsList.splice(index, 1)
      console.log(newDestinationsList)
      return newDestinationsList
    })
  }

  function handleChange(event) {
    console.log(event.target.name);
    //01-create a copy of the input object
    const newInput = {...input};
    //02-change the object
    newInput[event.target.name] = event.target.value
    //03-update the state
    setInput(newInput)
  }
  
  const handleSubmit = (e) => {
    //01-prevent the default behaviour
    e.preventDefault()
    //02-Modify the state
    const newDestinationsList = [...destinationsList]
    newDestinationsList.push(input)
    //03-Update destination list
    setDestinationsList(newDestinationsList)
    //04-Reset input
    setInput({name: "", image: "", continent: "", visited: false, notes: ""})
  }

  return (
    <div className="App">
      <main>
        <DestinationBox destinationsList= {destinationsList} handleVisitedBtn={(index)=> handleVisitedBtn(index)} handleDeleteBtn={(index)=>handleDeleteBtn(index)}></DestinationBox>
        <NewDestinationForm handleChange={handleChange}></NewDestinationForm>
        <form onSubmit={handleSubmit}>
            <input
              value={input.name}
              name="name"
              type="text"
              placeholder="Add new destination"
              onChange={handleChange}
            />
            <input type="text"
            value={input.continent}
            name='continent'
            onChange={handleChange}
            placeholder="Add continent"/>

            <input type="text"
            value={input.image}
            name='image'
            onChange={handleChange}
            placeholder="Add image url"/>

            <input type="text"
            value={input.notes}
            name='notes'
            onChange={handleChange}
            placeholder="Additional notes"/>
            <button type="submit">Add to list</button>
          </form>
      </main>
    </div>
  );
}

export default App;
