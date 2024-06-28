import "./home.page.styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex text-bg-dark text-center home-container">
      <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>Shay&#39;s Tree</h1>
          <p className="lead">
            Transform your space with our curated selection of beautiful,
            easy-care indoor and outdoor plants. Discover your green oasis
            today!
          </p>
          <p>
            <Link
              to="/plants"
              className="btn btn-lg btn-light border-white bg-white"
            >
              Show Me Plants
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
};

export default Home;
