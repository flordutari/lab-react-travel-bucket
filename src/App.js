import logo from "./logo.svg";
import "./App.css";
import destinations from "./assets/destinations.json";

function App() {
  const [destinationList, setDestinationList] = useState(destinations);

  return (
    <div className="App">
      {destinationList.map((distination, index) => (
        <div key={index}>
          <p>{distination.name}</p>
          <img src={distination.image} alt={destinationList.name} width={100} />
        </div>
      ))}
    </div>
  );
}

export default App;
