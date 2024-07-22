import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import Plants from "./pages/plants/plants.page";
import About from "./pages/about/about.page";
import Cart from "./pages/cart/cart.page";
import AuthenticationPage from "./pages/authentication/authentication.page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="plants/*" element={<Plants />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<AuthenticationPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
