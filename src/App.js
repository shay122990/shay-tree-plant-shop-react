import plants from "./plants-data";
const App = () => {
  return (
    <div>
      <h1>Plant Store</h1>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <p>Category: {plant.category}</p>
            <p>Price: ${plant.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
