import { plants } from "./plants-data";

function App() {
  return (
    <>
      <div>
        <h1>Plant Store</h1>
        <div>
          {plants.map((plant) => (
            <div key={plant.id} className="plant-item">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p>Price: ${plant.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
``;
